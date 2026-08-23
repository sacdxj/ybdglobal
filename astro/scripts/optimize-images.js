/**
 * 图片优化脚本
 *
 * 使用 imagemin 批量压缩 public/images 中的图片
 * 安装依赖: npm install --save-dev imagemin imagemin-webp imagemin-mozjpeg imagemin-pngquant
 */

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const ROOT = process.cwd();
const SOURCE_DIR = join(ROOT, 'public/images');
const OUTPUT_DIR = join(ROOT, 'public/images-optimized');

async function optimizeImages() {
  console.log('🖼️  开始优化图片...\n');

  // 1. 转换为 WebP (平均节省 70-80% 大小)
  console.log('📦 转换为 WebP...');
  const webpFiles = await imagemin([`${SOURCE_DIR}/**/*.{jpg,jpeg,png}`], {
    destination: OUTPUT_DIR,
    plugins: [
      imageminWebp({
        quality: 75,
        method: 6 // 较慢但更好的压缩
      })
    ]
  });
  console.log(`   ✅ WebP: ${webpFiles.length} 个文件\n`);

  // 2. 优化 JPEG (平均节省 40-60% 大小)
  console.log('📦 优化 JPEG...');
  const jpegFiles = await imagemin([`${SOURCE_DIR}/**/*.{jpg,jpeg}`], {
    destination: join(OUTPUT_DIR, 'jpeg'),
    plugins: [
      imageminMozjpeg({
        quality: 75,
        progressive: true
      })
    ]
  });
  console.log(`   ✅ JPEG: ${jpegFiles.length} 个文件\n`);

  // 3. 优化 PNG (平均节省 50-70% 大小)
  console.log('📦 优化 PNG...');
  const pngFiles = await imagemin([`${SOURCE_DIR}/**/*.{png}`], {
    destination: join(OUTPUT_DIR, 'png'),
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });
  console.log(`   ✅ PNG: ${pngFiles.length} 个文件\n`);

  // 4. 生成报告
  const report = {
    timestamp: new Date().toISOString(),
    webp: webpFiles.map(f => ({
      original: f.source.path.split('images\\')[1],
      optimized: f.destinationPath.split('images-optimized\\')[1],
      savings: `${((1 - f.destinationPath.size / f.source.data.size) * 100).toFixed(1)}%`
    }))
  };

  await writeFile(
    join(ROOT, 'image-optimization-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log('✅ 图片优化完成！');
  console.log(`📊 报告已生成: image-optimization-report.json`);
  console.log(`📁 优化后的图片保存在: ${OUTPUT_DIR}\n`);
  console.log('💡 下一步:');
  console.log('   1. 检查优化后的图片');
  console.log('   2. 手动替换 public/images 中的图片');
  console.log('   3. 或直接使用 public/images-optimized 并更新图片路径\n');
}

optimizeImages().catch(console.error);
