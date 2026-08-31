export interface Product {
  model: string;
  slug: string;
  family: 'USB Cable' | 'HDMI Cable' | 'DisplayPort' | 'Hub & Dock' | 'Charger';
  interface: string;
  power: string;
  dataRate: string;
  video: string;
  material: string;
  lengths: string;
  bestFor: string;
  customization: string[];
  proofStatus: string;
  detailReady?: boolean;
  cardLabel?: string;
  cardFacts?: Array<{label:string;value:string}>;
  images?: Array<{src:string;alt:string;label:string}>;
  variantGroups?: Array<{model:string;format:string;connector:string;length:string;capability:string}>;
  featureHighlights?: Array<{title:string;value:string;note:string;image:string;alt:string}>;
  sourceUrl?: string;
  sourceLabel?: string;
  sourceSnapshot?: string;
  supplierClaims?: Array<[string,string]>;
  packagingClaims?: Array<[string,string]>;
}

export const products: Product[] = [
  { model:'YBD-L421D USB-A to USB-C Cable', slug:'/products/usb-cables/usb-c-fast-charging-cable/', family:'USB Cable', interface:'USB-A to USB-C', power:'Supplier lists 6A / 66W; evidence pending', dataRate:'Charging + data transmission listed; data rate not stated', video:'Not positioned for display output', material:'PVC jacket, pure copper conductor, braided shielding listed', lengths:'1 m / 2 m listed', bestFor:'Mobile-device charging cable ranges, wholesale programs and private-label evaluation', customization:['White color listed','1 m / 2 m','Packaging by project','Logo / shell options require confirmation'], proofStatus:'Supplier listing captured; electrical, protocol, compliance and commercial claims require source documents', detailReady:true, cardFacts:[{label:'Power',value:'6A / 66W listed'},{label:'Build',value:'PVC · copper · braid'},{label:'Length',value:'1 m / 2 m'}],
    images:[
      {src:'/images/products/jl-l421d/01-main.webp',alt:'White USB-A to USB-C cable YBD-L421D shown on a white background',label:'Product view'},
      {src:'/images/products/jl-l421d/02-feature.webp',alt:'Supplier product image showing the white USB-A to USB-C cable',label:'Cable format'},
      {src:'/images/products/jl-l421d/03-detail.webp',alt:'Supplier application image illustrating charging and data use',label:'Listed use'},
      {src:'/images/products/jl-l421d/04-cable.webp',alt:'Close-up supplier image of the USB-C connector and strain relief',label:'Connector detail'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/Good-Quality-6A-66w-USB-Type_1600583977880.html',
    sourceLabel:'Alibaba product 1600583977880',
    sourceSnapshot:'Supplier listing reviewed 15 Aug 2026. Values below reproduce the supplied listing data and are not independent verification.',
    supplierClaims:[
      ['Listing title','Good Quality 6A 66W USB Type C Cable Wire for Mobile Phone Fast Charging USB C Data Cable'],
      ['Model number','YBD-L421D'],
      ['Brand name','YBD Global'],
      ['Product name','6A fast Charging cable'],
      ['USB type','Standard'],
      ['Connectors','USB 2.0 Connector; listing images show USB-A to USB-C'],
      ['Type','type-c usb cable; Usb Cable for Iphone; Fast charging cable'],
      ['Function','6A Fast Charging; Charging + Data transmission'],
      ['Feature','Fast Charging Speed'],
      ['Current / power','6A / 66W'],
      ['Material / jacket','PVC / PVC'],
      ['Conductor','Pure Copper'],
      ['Shielding','Braid'],
      ['Color','White'],
      ['Cable length','1 m / 2 m'],
      ['Use','mobile phone; for android; Multifunction; Video Game Player'],
      ['Usage','Mobile Phone USB Charging Cable'],
      ['Private mold','No'],
      ['Place of origin','Guangdong, China'],
      ['Certification','CE; FCC; RoHS — documents pending'],
      ['Warranty','12 months — policy pending']
    ],
    packagingClaims:[
      ['Listing price / MOQ snapshot','US$0.36–0.42; minimum order 200 pieces — reconfirm by quotation'],
      ['Selling units','Single item'],
      ['Single package size','23 × 17 × 3 cm'],
      ['Single gross weight','0.1 kg'],
      ['Lead time: 1–300 pieces','7 days — current quotation confirmation required'],
      ['Lead time: over 300 pieces','To be negotiated']
    ] },
  { model:'Super Fast PD60W Charging for iPhone 15 Type-C to Type-C Eco-Friendly Pure Copper TPE Cable with 1M/2M Options', slug:'/products/usb-cables/usb-c-to-usb-c-pd-cable/', family:'USB Cable', interface:'USB-C to USB-C', power:'Supplier lists PD60W charging; 100W option requires quotation confirmation', dataRate:'Supplier description lists charging + data transfer and 480 Mbps; test evidence pending', video:'Not positioned for display output', material:'ABS / PVC connector construction, tinned-copper conductor, nylon / PVC braided jacket listed', lengths:'1 m / 2 m listed', bestFor:'iPhone 15/16, USB-C mobile-device, tablet, power-bank and private-label charging-cable programs', customization:['MOQ 100 pieces for standard order','100-500 pieces: US$0.35/piece','500+ pieces: US$0.30/piece','Custom logo supported','Custom packaging supported from 1,000 pieces'], proofStatus:'Supplier listing captured; PD60W, data, durability, compliance, logo, packaging and current quotation claims require source documents or order confirmation', detailReady:true, cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'100-500 pcs',value:'US$0.35/pc'},{label:'500+ pcs',value:'US$0.30/pc'}],
    images:[
      {src:'/images/products/pd60w-100w-braided/01-main.webp',alt:'White braided USB-C to USB-C cable on a white background',label:'Product view'},
      {src:'/images/products/pd60w-100w-braided/02-feature.webp',alt:'Supplier image illustrating the listed 60W charging option',label:'Listed 60W option'},
      {src:'/images/products/pd60w-100w-braided/03-detail.webp',alt:'Supplier image illustrating charging and data transfer',label:'Listed data function'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/Super-Fast-PD60W-Charging-for-iPhone_1601560283570.html',
    sourceLabel:'Alibaba product 1601560283570',
    sourceSnapshot:'Supplier listing and user-provided commercial terms reviewed 31 Aug 2026. Values below reproduce supplied listing/user terms and are not independent verification.',
    supplierClaims:[
      ['Listing title','Super Fast PD60W Charging for iPhone USB-C Cable'],
      ['Model number','Not stated in the supplied listing fields'],
      ['Brand name','YBD Global'],
      ['Product name','PD60W Fast Charging Cable'],
      ['USB type','type-c to type-c'],
      ['Interface','Type-C Interface'],
      ['Connectors','Nickel Plated; Type-C'],
      ['Type','type-c usb cable; Usb Cable; Fast charging cable'],
      ['Function','Charging + Data Transfer'],
      ['Listed power options','PD 60W; 100W option requires quotation confirmation'],
      ['Listed data description','480 Mbps in supplier description — test evidence pending'],
      ['Material','ABS; Nylon; PVC'],
      ['Additional material entry','PVC + Copper Wire'],
      ['Conductor','Tinned Copper'],
      ['Jacket','Nylon; PVC'],
      ['Jacket material','PVC Weaving'],
      ['Color options','White 60W option listed; final color-box and 100W options require quotation confirmation'],
      ['Cable length','1 m (3.28 ft) / 2 m (6.56 ft)'],
      ['Use','Smart Watch; Tablet; Power Bank; mobile phone'],
      ['Usage','Mobile phone'],
      ['Keywords','Type-C to Type-C Fast Charging Cable; iPhone USB-C charging cable'],
      ['Place of origin','Guangdong, China'],
      ['Package','Standard package; custom packaging supported from 1,000 pieces'],
      ['Warranty','12 months / 1 year — policy pending'],
      ['Certificate listings','FCC; RoHS; CE; EN 55032 — model scope and documents pending'],
      ['Durability description','Supplier description mentions braided durability and bend testing — report pending'],
      ['Custom logo','Supported; confirm artwork, placement and marking method before production'],
      ['Custom packaging','Supported from 1,000 pieces; confirm artwork, box type, barcode and carton mark']
    ],
    packagingClaims:[
      ['Current order terms','MOQ 100 pieces. 100-500 pieces: US$0.35/piece. 500+ pieces: US$0.30/piece. Custom packaging from 1,000 pieces.'],
      ['Selling units','Single item'],
      ['Single package size','10 × 10 × 5 cm'],
      ['Single gross weight','0.1 kg'],
      ['Lead time: 1–10,000 pieces','7 days — current quotation confirmation required'],
      ['Lead time: over 10,000 pieces','To be negotiated']
    ] },
  { model:'240W 5A Fast Charging Cable & Phone Holder-Braided USB-C to C 2-in-1 Invisible Design Type C Cable for Smartphones', slug:'/products/usb-cables/folding-bracket-braided-fast-charging-cable/', family:'USB Cable', interface:'Type-C to Type-C listed; USB-A to Type-C image variant requires SKU confirmation', power:'Supplier images show 240W and 65W variants; attribute table lists 5A fast charging; final rating requires exact SKU evidence', dataRate:'Charging + mobile-device use listed; data rate not stated', video:'Built-in foldable phone stand for watching while charging; not positioned for display output', material:'Nylon / PVC jacket, pure copper conductor and braided shielding listed', lengths:'1.5 m shown in packaging artwork; other lengths require quotation confirmation', bestFor:'Retail-ready phone charging cable programs that need a foldable stand feature and optional logo branding', customization:['Stock goods available for non-custom orders from 50 pieces','Custom logo on product supported','Custom production lead time: 7-10 days after confirmation','Custom packaging MOQ: 1,000 pieces'], proofStatus:'User-supplied product images and attribute screenshot captured; exact power variant, connector SKU, packaging artwork, compliance and current quotation require confirmation', detailReady:true, cardLabel:'Foldable stand cable', cardFacts:[{label:'Stock MOQ',value:'50 pcs'},{label:'Custom lead time',value:'7-10 days'},{label:'Packaging MOQ',value:'1,000 pcs'}],
    images:[
      {src:'/images/products/folding-bracket-braided-cable/01-main.webp',alt:'Braided fast charging cable with foldable phone stand and retail box packaging',label:'Product and packaging'},
      {src:'/images/products/folding-bracket-braided-cable/02-stand-use.webp',alt:'Phone supported horizontally by the cable foldable bracket while charging',label:'Foldable stand use'},
      {src:'/images/products/folding-bracket-braided-cable/05-240w-variant.webp',alt:'Type-C to Type-C braided cable image showing a 240W foldable bracket variant',label:'240W image variant'},
      {src:'/images/products/folding-bracket-braided-cable/03-usb-a-option.webp',alt:'USB-A to Type-C braided cable image showing a 65W foldable bracket variant',label:'USB-A option image'},
      {src:'/images/products/folding-bracket-braided-cable/04-folding-detail.webp',alt:'Close-up of the folding bracket mechanism on the braided charging cable',label:'Bracket detail'},
      {src:'/images/products/folding-bracket-braided-cable/06-feature.webp',alt:'Supplier feature image showing folding bracket braided data cable with phone compatibility notes',label:'Feature summary'}
    ],
    featureHighlights:[
      {title:'Stock orders',value:'From 50 pcs',note:'Non-custom orders can be handled as stock goods; reconfirm available connector, color and length before order.',image:'/images/products/folding-bracket-braided-cable/01-main.webp',alt:'Retail box and braided foldable bracket cable for stock order review'},
      {title:'Customization',value:'Logo supported',note:'Custom logo on the product is supported; artwork position and marking method require sample approval.',image:'/images/products/folding-bracket-braided-cable/04-folding-detail.webp',alt:'Cable bracket detail for logo placement review'},
      {title:'Packaging',value:'1,000 pcs MOQ',note:'Custom packaging starts from 1,000 pieces and custom delivery is listed as 7-10 days after confirmation.',image:'/images/products/folding-bracket-braided-cable/06-feature.webp',alt:'Supplier feature image for packaging and product review'}
    ],
    sourceSnapshot:'User-provided product parameter screenshot and images reviewed 26 Aug 2026. Values below reproduce supplied material and buyer instructions and are not independent certification evidence.',
    supplierClaims:[
      ['Product type','USB cable / fast charging cable with foldable phone stand'],
      ['USB type','type-c to type-c listed in attribute screenshot'],
      ['Image variants','240W Type-C to Type-C artwork and 65W USB-A to Type-C artwork are both supplied; exact SKU matrix required'],
      ['Function','5A Fast Charging listed in attribute screenshot'],
      ['Material','Nylon'],
      ['Conductor','Pure Copper'],
      ['Shielding','Braid'],
      ['Jacket','Nylon, PVC'],
      ['Connectors','USB 2.0 Connector; For Iphone listed in screenshot; connector wording requires cleanup by exact SKU'],
      ['Use','for android, mobile phone, IOS'],
      ['Private mold','Yes'],
      ['Brand name','YBD for site display; supplier screenshot brand wording requires internal source alignment'],
      ['Place of origin','China'],
      ['Length cue','1500MM shown in package artwork'],
      ['Feature cue','Foldable phone holder / 90 degree elbow design shown in supplied product images']
    ],
    packagingClaims:[
      ['Price: 1-500 pieces','US$1.35 / piece'],
      ['Price: 500+ pieces','US$1.30 / piece'],
      ['Stock order MOQ','50 pieces for non-custom stock goods'],
      ['Custom lead time','7-10 days after customization confirmation'],
      ['Custom packaging MOQ','1,000 pieces'],
      ['Logo customization','Logo can be added on the product'],
      ['Selling units','Single item'],
      ['Single package size','8 × 8 × 4 cm'],
      ['Single gross weight','0.1 kg']
    ] },
  { model:'HDMI Cable Configuration', slug:'/products/hdmi-cables/hdmi-2-1-cable/', family:'HDMI Cable', interface:'Confirm connector by selected SKU', power:'Not applicable', dataRate:'Confirm by selected SKU', video:'Confirm requested display performance and evidence', material:'Confirm jacket by selected SKU', lengths:'Confirm construction and length', bestFor:'Display, projector and distribution programs', customization:['Logo','Color','Length','Packaging'], proofStatus:'Resolution and refresh claims require SKU test evidence', cardLabel:'HDMI configuration', cardFacts:[{label:'Connector',value:'Confirm selected SKU'},{label:'Display',value:'Define target mode'},{label:'Length',value:'Confirm installation'}], images:[{src:'/images/catalog/hdmi-cable-category.webp',alt:'Generic black braided HDMI male-to-male cable with both connector ends visible',label:'HDMI configuration reference'}] },
  { model:'DP 2.1 16K 80Gbps DisplayPort Cable', slug:'/products/displayport-cables/displayport-2-1-cable/', family:'DisplayPort', interface:'DisplayPort to DisplayPort, male to male', power:'Not applicable', dataRate:'Supplier lists DP 2.1 / 80 Gbps; protocol and test evidence pending', video:'Supplier lists 2K / 4K / 8K / 16K and HDR; exact timing support requires evidence', material:'Bare-copper conductor, gold-plated contact description, foil / combination shielding and nylon jacket listed', lengths:'1 m / 2 m / 3 m listed', bestFor:'Monitor, workstation, projector, home-theater and professional display sourcing programs', customization:['Black color listed','1 m / 2 m / 3 m','Polybag packing','Logo, construction and packaging require quotation'], proofStatus:'Supplier listing captured; DP version, bandwidth, resolution, refresh, HDR, durability and compliance claims require model-level evidence', detailReady:true, cardLabel:'DP to DP', cardFacts:[{label:'Bandwidth',value:'80 Gbps listed'},{label:'Display',value:'Up to 16K listed'},{label:'Length',value:'1 m / 2 m / 3 m'}],
    images:[
      {src:'/images/products/dp21-16k-80gbps/01-main.webp',alt:'Black braided DisplayPort to DisplayPort cable with male connectors',label:'Product view'},
      {src:'/images/products/dp21-16k-80gbps/02-feature.webp',alt:'Supplier image showing the DisplayPort connector and listed display modes',label:'Listed display modes'},
      {src:'/images/products/dp21-16k-80gbps/03-detail.webp',alt:'Supplier image illustrating braided cable and connector durability claims',label:'Construction detail'},
      {src:'/images/products/dp21-16k-80gbps/04-cable.webp',alt:'Supplier connection diagram for standard DisplayPort interfaces',label:'Connection format'}
    ],
    featureHighlights:[
      {title:'Display modes',value:'Up to 16K listed',note:'Resolution and refresh combinations require exact timing and test evidence.',image:'/images/products/dp21-16k-80gbps/02-feature.webp',alt:'Supplier image showing listed DisplayPort display modes'},
      {title:'Construction',value:'Braided cable',note:'Nylon jacket, copper conductor and shielding descriptions require sample confirmation.',image:'/images/products/dp21-16k-80gbps/03-detail.webp',alt:'Supplier construction image for the braided DisplayPort cable'},
      {title:'Connection',value:'DP to DP',note:'Confirm source, display, direction, length and target mode in the RFQ.',image:'/images/products/dp21-16k-80gbps/04-cable.webp',alt:'Supplier DisplayPort connection diagram'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/High-Quality-DP-2-1-Cable_1601720628222.html',
    sourceLabel:'Alibaba product 1601720628222',
    sourceSnapshot:'Supplier listing reviewed 15 Aug 2026. Values below reproduce the supplied listing data and are not independent verification.',
    supplierClaims:[
      ['Listing title','High Quality DP 2.1 Cable 16K 80Gbps DP to DP Male-to-Male HDR Video Audio Cable'],
      ['Model number','Not stated in the supplied listing fields'],
      ['Brand name','YBD Global'],
      ['Connector type','DP to DP'],
      ['Gender','Male to male'],
      ['Type','DP Cable; Audio Cables; Video Data Transmission'],
      ['Listed protocol / bandwidth','DP 2.1 / 80 Gbps — test evidence pending'],
      ['Resolution','2K; 4K; 8K; 16K — timing and test conditions pending'],
      ['Additional display claims','HDR, video and audio — feature evidence pending'],
      ['Conductor','Bare Copper; listing also says Gold Plated'],
      ['Shielding','Foil; Combination'],
      ['Jacket','Nylon'],
      ['Color','Black'],
      ['Length options','1 m (3.28 ft); 2 m (6.56 ft); 3 m (9.84 ft)'],
      ['Application','Computer; HDTV; Headphone; Home Theater; Laptop; Monitor; Multimedia; Projector; TV'],
      ['Packing','Polybag'],
      ['Place of origin','Guangdong, China'],
      ['Certificate listings','FCC; RoHS; CE — model scope and documents pending'],
      ['Durability description','Supplier description mentions 20,000+ bending tests — report pending'],
      ['Source inconsistency','One supplier image states 40 Gbps while the listing title states 80 Gbps; verification required']
    ],
    packagingClaims:[
      ['Listing price / MOQ snapshot','US$1.79–2.50; minimum order 100 pieces — reconfirm by quotation'],
      ['Selling units','Single item'],
      ['Single volume','Listing shows 0 cm³ — unusable placeholder; confirm actual carton data'],
      ['Single gross weight','Listing shows 0.0 kg — unusable placeholder; confirm actual weight'],
      ['Lead time: 1–100 pieces','7 days — current quotation confirmation required'],
      ['Lead time: 101–500 pieces','14 days — current quotation confirmation required'],
      ['Lead time: over 500 pieces','To be negotiated']
    ] },
  { model:'Multiport USB-C Hub', slug:'/products/hubs-docking/multiport-usb-c-hub/', family:'Hub & Dock', interface:'Confirm host and port mix', power:'Confirm requested pass-through profile', dataRate:'Confirm by port matrix', video:'Confirm requested display outputs and compatibility', material:'Confirm enclosure by selected SKU', lengths:'Confirm host-cable configuration', bestFor:'Laptop accessory and private-label programs', customization:['Port mix','Housing','Logo','Packaging'], proofStatus:'Port matrix and OS compatibility confirmed during RFQ', cardLabel:'USB-C hub', cardFacts:[{label:'Ports',value:'Define port matrix'},{label:'Power',value:'Confirm pass-through'},{label:'Host',value:'Confirm compatibility'}], images:[{src:'/images/catalog/usb-c-hub-category.webp',alt:'Generic graphite multiport USB-C hub with HDMI, USB-A and USB-C ports',label:'Port-matrix configuration reference'}] },
  { model:'Dual-Head 8-in-1 Aluminium USB-C Hub', slug:'/products/hubs-docking/dual-head-8-in-1-aluminium-hub/', family:'Hub & Dock', interface:'Dual-head host connection with supplier-listed 8-in-1 hub format', power:'Pass-through charging terms require exact SKU confirmation', dataRate:'USB data functions listed by product format; port version and transfer rate require confirmation', video:'Display-output behavior requires exact port map, host device and test evidence', material:'Aluminium / aluminium-alloy housing listed in supplier title', lengths:'Compact hub with integrated host connector; dimensions require confirmation', bestFor:'Laptop accessory, tablet productivity, ecommerce reseller and private-label hub programs that need a low-MOQ 8-in-1 aluminium hub', customization:['Logo by project','Packaging by project','Color and finish by quotation','Exact port matrix locked before sample approval'], proofStatus:'User-provided Alibaba listing URL and commercial terms captured; port matrix, charging, display behavior, OS compatibility, certification, packaging and lead time require source evidence', detailReady:true, cardLabel:'8-in-1 USB-C hub', cardFacts:[{label:'Price',value:'US$1.90 / piece'},{label:'MOQ',value:'100 pcs'},{label:'Build',value:'Aluminium listed'}],
    images:[
      {src:'/images/products/dual-head-8-in-1-aluminium-hub/01-port-layout.webp',alt:'Dual-head 8-in-1 aluminium USB-C hub with labeled USB-C, USB 3.0, USB 2.0, TF/SD and audio ports plus dimension cues',label:'Port layout'},
      {src:'/images/products/dual-head-8-in-1-aluminium-hub/02-sd-tf-card.webp',alt:'Dual-head 8-in-1 aluminium USB-C hub connected to a laptop with SD and TF card reading cue',label:'SD and TF card reader'},
      {src:'/images/products/dual-head-8-in-1-aluminium-hub/03-tablet-connection.webp',alt:'Dual-head 8-in-1 aluminium USB-C hub connected to a tablet with USB flash drives and peripherals',label:'Tablet connection'},
      {src:'/images/products/dual-head-8-in-1-aluminium-hub/04-dimensions.webp',alt:'Dual-head 8-in-1 aluminium USB-C hub with USB 3.0, USB 2.0, TF/SD, 3.5 mm and USB-C labels plus size dimensions',label:'Dimensions'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/Dual-Head-8-in-1-Aluminium_1601608784151.html?selectedCarrierCode=SEMI_MANAGED_STANDARD%40%40STANDARD&priceId=383da2b7964e41268a8114778328cad5',
    sourceLabel:'Alibaba product 1601608784151',
    sourceSnapshot:'User-provided Alibaba listing reviewed 26 Aug 2026. Automated retrieval returned Alibaba anti-bot protection, so the record below is limited to the provided URL/title cues and user-specified quotation terms.',
    supplierClaims:[
      ['Listing title cue','Dual Head 8 in 1 Aluminium'],
      ['Product format','8-in-1 USB-C hub / docking adapter'],
      ['Host connection','Dual-head host connection listed in title cue; exact connector layout requires manual confirmation'],
      ['Housing','Aluminium / aluminium-alloy wording appears in the listing title cue'],
      ['Port matrix','Exact eight-port list not captured from the protected page; verify HDMI, USB, card-reader, PD, Ethernet or audio ports before publishing'],
      ['Power delivery','Charging or pass-through behavior requires exact SKU and power-profile confirmation'],
      ['Video output','Display capability requires the exact output port, host device, resolution and refresh evidence'],
      ['Compatibility','Host OS and device compatibility require sample validation'],
      ['Source boundary','Alibaba returned anti-bot protection during automated retrieval; final attributes should be verified manually before public claim use']
    ],
    packagingClaims:[
      ['Unit price','US$1.90 / piece'],
      ['MOQ','100 pieces'],
      ['Lead time','Not captured from accessible page snapshot; confirm by current quotation'],
      ['Packaging','Retail or neutral packaging by project; confirm package size, weight and carton data before order']
    ] },
  { model:'YBD 8-in-1 USB-C Hub', slug:'/products/hubs-docking/justlink-8-in-1-usb-c-hub/', family:'Hub & Dock', interface:'USB-C host hub with RJ45, SD/TF, USB2.0, USB3.0, HDMI, Type-C and PD cues shown', power:'Supplier image shows 100W input and 68W output cues; exact PD pass-through behavior requires confirmation', dataRate:'USB 3.0 and USB2.0 ports shown; transfer rate requires confirmation', video:'HDMI and 4K HDMI 1.4 cues shown; resolution, refresh and host compatibility require evidence', material:'Aluminium alloy housing shown', lengths:'15.5 cm / 6 in length and 3 cm / 1.18 in width shown; thickness cue around 1 cm / 0.39 in requires confirmation', bestFor:'Laptop accessory, computer-adapter, ecommerce reseller and private-label hub programs that need logo support and low sample MOQ', customization:['Logo supported','Packaging by project','Color and finish by quotation','Exact port matrix locked before sample approval'], proofStatus:'User-provided Alibaba listing URL, product images and buyer-specified commercial terms captured; exact port matrix, PD charging, USB data behavior, display output, OS compatibility, certification, packaging and lead time require source evidence', detailReady:true, cardLabel:'8-in-1 USB-C hub', cardFacts:[{label:'10-100 pcs',value:'US$3.10 / piece'},{label:'100-500 pcs',value:'US$2.95 / piece'},{label:'MOQ',value:'10 pcs'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/ybd-8-in-1-usb-c-hub/01-main.webp',alt:'YBD 8-in-1 USB-C hub showing RJ45, SD and TF card slots, USB2.0, USB3.0, HDMI, Type-C and PD port labels',label:'Port layout'},
      {src:'/images/products/ybd-8-in-1-usb-c-hub/02-pd-data.webp',alt:'YBD 8-in-1 USB-C hub connected to laptop, phone and charger with PD charging and data transfer cues',label:'PD charging and data'},
      {src:'/images/products/ybd-8-in-1-usb-c-hub/03-rj45.webp',alt:'YBD 8-in-1 USB-C hub connected to laptop with RJ45 Ethernet cable and card reader accessories',label:'RJ45 Ethernet'},
      {src:'/images/products/ybd-8-in-1-usb-c-hub/04-aluminium-alloy.webp',alt:'YBD 8-in-1 USB-C hub aluminium alloy body with heat dissipation and portable size cues',label:'Aluminium alloy body'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/Justlink-8-in-1-USB-C_1600464739154.html?spm=a2700.shop_plser.41413.41.372b1a9a3WEwZi',
    sourceLabel:'Alibaba product 1600464739154',
    sourceSnapshot:'User-provided Alibaba listing reviewed 31 Aug 2026. Public search/title cues identify an 8-in-1 USB-C hub with USB 3.0, smart aluminium metal wording, Type-C and PD charging for computer-adapter use. User-specified commercial terms are recorded below and require current quotation confirmation before final order.',
    supplierClaims:[
      ['Listing title cue','YBD 8 in 1 USB C for site display; original marketplace title requires internal source alignment'],
      ['Product format','8-in-1 USB-C hub / computer adapter'],
      ['Brand cue','YBD for site display'],
      ['Host interface','Type-C / USB-C host connection listed in title cue'],
      ['Data cue','USB 3.0 listed in public title/search cue; exact port version and transfer rate require confirmation'],
      ['Power delivery','PD charging listed in public title/search cue; wattage and operating conditions require confirmation'],
      ['Housing','Smart aluminium metal wording appears in public title/search cue'],
      ['Visible port map','RJ45, SD/TF, USB2.0, USB3.0, HDMI, Type-C and PD cues are shown in the supplied product images'],
      ['Video output','HDMI and 4K HDMI 1.4 cues shown; display capability requires exact source, display, resolution and refresh evidence'],
      ['Size cues','15.5 cm / 6 in length and 3 cm / 1.18 in width shown; thickness cue around 1 cm / 0.39 in requires confirmation'],
      ['Compatibility','Computer-adapter use appears in public title/search cue; host OS and model compatibility require sample validation'],
      ['Source boundary','Final listing attributes should be verified manually against the Alibaba page, supplier SKU sheet or sample record before public claim use']
    ],
    packagingClaims:[
      ['Price: 10-100 pieces','US$3.10 / piece'],
      ['Price: 100-500 pieces','US$2.95 / piece'],
      ['MOQ','10 pieces'],
      ['Logo customization','Logo supported'],
      ['Lead time','Not captured from accessible page snapshot; confirm by current quotation'],
      ['Packaging','Retail or neutral packaging by project; confirm package size, weight and carton data before order']
    ] },
  { model:'10-in-1 Type-C Hub Multiport Docking Adapter', slug:'/products/hubs-docking/10-in-1-type-c-hub/', family:'Hub & Dock', interface:'USB-C host input with supplier-listed HDMI, VGA, RJ45, USB, SD/TF, 3.5 mm and PD ports', power:'Supplier image lists PD charging; wattage requires exact SKU confirmation', dataRate:'USB data ports listed; USB version and transfer rate require confirmation', video:'HDMI and VGA outputs listed; resolution, refresh and single/dual display behavior require evidence', material:'Metallic hub enclosure shown; exact housing material requires confirmation', lengths:'Integrated short host cable shown; cable length requires confirmation', bestFor:'Laptop accessory, office workstation, reseller and private-label hub programs that need a compact 10-port USB-C adapter', customization:['Logo by project','Packaging by project','Port labeling / artwork by quotation','Exact port matrix locked before sample approval'], proofStatus:'Alibaba listing link and product image captured; exact port spec, PD rating, video mode, Ethernet speed, OS compatibility, compliance and current quotation require source evidence', detailReady:true, cardLabel:'10-in-1 USB-C hub', cardFacts:[{label:'Price',value:'US$13 / piece'},{label:'MOQ',value:'50 pcs'},{label:'Ports',value:'10-in-1 listed'}],
    images:[
      {src:'/images/products/10-in-1-type-c-hub/01-main.webp',alt:'Silver 10-in-1 Type-C hub with labeled HDMI, VGA, RJ45, USB, card reader, audio and PD ports',label:'Supplier product image'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/10-in-1-Type-C-Hub_60702593500.html',
    sourceLabel:'Alibaba product 60702593500',
    sourceSnapshot:'Alibaba listing link and publicly indexed product image reviewed 26 Aug 2026. Values below reproduce visible supplier-listing cues and require exact SKU confirmation before publication.',
    supplierClaims:[
      ['Listing title cue','10 in 1 Type-C Hub'],
      ['Product format','USB-C multiport hub / docking adapter'],
      ['Host interface','Type-C / USB-C host connector'],
      ['Visible port map','PD, HDMI, RJ45, VGA, USB, SD, TF and 3.5 mm audio ports are shown in the supplier image'],
      ['Video outputs','HDMI and VGA listed; exact resolution, refresh and mirror/extend behavior require confirmation'],
      ['Network','RJ45 Ethernet port listed; 10/100/1000 Mbps support requires confirmation'],
      ['Power delivery','PD charging port listed; wattage and pass-through conditions require confirmation'],
      ['Card reader','SD and TF card reader slots shown'],
      ['USB ports','Multiple USB-A data ports shown; USB version and transfer rate require confirmation'],
      ['Audio','3.5 mm audio port shown'],
      ['Color / housing','Silver metallic hub body shown'],
      ['Source boundary','Original Alibaba page presented anti-bot protection during automated retrieval, so final attributes should be verified manually before public claim use']
    ],
    packagingClaims:[
      ['Unit price','US$13 / piece'],
      ['MOQ','50 pieces'],
      ['Lead time','Not captured from accessible page snapshot; confirm by current quotation'],
      ['Packaging','Retail or neutral packaging by project; confirm carton data before order']
    ] },
  { model:'YBD-P150 USB-A + USB-C Dual-Port Wall Charger', slug:'/products/chargers/jl-p150-dual-port-wall-charger/', family:'Charger', interface:'USB-A + USB-C dual-port option; USB-C-only image also listed', power:'Supplier title/images state 20W while attributes state 65W; configuration conflict requires confirmation', dataRate:'Not applicable', video:'Not applicable', material:'PC fireproof-material and ABS descriptions listed; evidence pending', lengths:'US / EU plug options listed; no cable bundle confirmed', bestFor:'Mobile-phone, tablet and private-label wall-charger sourcing programs', customization:['White color','US / EU plug','USB-C or USB-A + USB-C listing options','Packaging customization from 500 pieces listed'], proofStatus:'Supplier listing captured; port version, output map, protocol, protection, safety and compliance require model-level evidence', detailReady:true, cardLabel:'USB-A + USB-C', cardFacts:[{label:'Power',value:'20W / 65W conflict'},{label:'Ports',value:'USB-A + USB-C'},{label:'Plug',value:'US / EU listed'}],
    images:[
      {src:'/images/products/jl-p150-dual-port-charger/01-main.webp',alt:'White wall charger with USB-A and USB-C output ports and EU plug',label:'Dual-port product view'},
      {src:'/images/products/jl-p150-dual-port-charger/02-feature.webp',alt:'Supplier image showing the USB-C-only wall charger variant',label:'Listed USB-C variant'},
      {src:'/images/products/jl-p150-dual-port-charger/03-detail.webp',alt:'Supplier image showing the listed PD20W and QC3.0 charger description',label:'Listed 20W description'},
      {src:'/images/products/jl-p150-dual-port-charger/04-charger.webp',alt:'Supplier illustration of charger protection functions',label:'Protection description'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/New-Arrivals-Dual-Port-Wall-Charger_1600529610391.html',
    sourceLabel:'Alibaba product 1600529610391',
    sourceSnapshot:'Supplier listing reviewed 15 Aug 2026. Values below reproduce the supplied listing data and are not independent verification.',
    supplierClaims:[
      ['Listing title','Dual Port Wall Charger with PD, USB Type-C and QC3.0; title states 20W'],
      ['Model number','YBD-P150'],
      ['Brand name','YBD Global'],
      ['Type','Power Supply Adapter; Universal Adapter; Fast Charger; Desktop Charger'],
      ['Port','1 × USB plus Type-C; page also shows a USB-C-only option'],
      ['Input','100–240V, 50–60Hz'],
      ['Output entries','9V/2A; 5V/3A; 9V/3A; 12V/3A; 15V/3A; 20V/3.25A; 12V/2.5A; 15V/2A'],
      ['Output-power attribute','65W — conflicts with 20W title and product image'],
      ['Function','QC3.0; PD; PD 3.0'],
      ['Protection','Short circuit; over-charging; overcurrent; overvoltage'],
      ['Additional protection description','Supplier description also mentions temperature and overpower protection — evidence pending'],
      ['Material','PC fireproof material; ABS'],
      ['Usage','Universal; laptop; mobile-phone charging'],
      ['Plug options','US / EU'],
      ['USB-port entry','Type-C + USB port'],
      ['Color','White'],
      ['Place of origin','Guangdong, China'],
      ['Warranty','12 months — policy pending'],
      ['Certificate listings','FCC; CE Declaration of Conformity; RoHS; CE — model scope and documents pending'],
      ['Source inconsistency','20W title/image, 65W attribute and USB-C-only/dual-port images appear on one listing; exact SKU matrix required']
    ],
    packagingClaims:[
      ['Listing price / MOQ snapshot','US$1.25–1.55; minimum order 100 pieces — reconfirm by quotation'],
      ['Selling units','Single item'],
      ['Single package size','23 × 17 × 2 cm'],
      ['Single gross weight','0.2 kg'],
      ['Packaging customization','From +US$0.30/piece; minimum 500 pieces — reconfirm by quotation'],
      ['Lead time: 1–300 pieces','7 days — current quotation confirmation required'],
      ['Lead time: over 300 pieces','To be negotiated']
    ] },
  { model:'YBD-S5 15W 3-in-1 Magnetic Wireless Charger', slug:'/products/chargers/jl-s5-3-in-1-wireless-charger/', family:'Charger', interface:'Type-C power input; three wireless charging positions listed', power:'Supplier lists phone up to 15W, watch 2.5W and earphone 5W; evidence pending', dataRate:'Not applicable', video:'Magnetic phone holder and rotating display position listed; device fit requires confirmation', material:'PC fireproof material and ABS listed; one supplier image additionally states PMMA', lengths:'Desktop charging station; 107 × 66 × 66 mm shown in supplier image', bestFor:'Mobile-accessory, desktop-charging and private-label 3-in-1 wireless-charger programs', customization:['Dark grey / gun color listing descriptions','Universal socket-standard selection','Packaging customization from 500 pieces listed','Logo and device-fit matrix require confirmation'], proofStatus:'Supplier listing captured; model identity, input, wireless output, magnetic compatibility, safety and compliance require source evidence', detailReady:true, cardLabel:'3-in-1 wireless', cardFacts:[{label:'Phone',value:'Up to 15W listed'},{label:'Devices',value:'Phone · watch · earbuds'},{label:'Input',value:'Type-C'}],
    images:[
      {src:'/images/products/jl-s5-wireless-charger/01-main.webp',alt:'Dark grey 3-in-1 magnetic wireless charging station',label:'Product view'},
      {src:'/images/products/jl-s5-wireless-charger/03-detail.webp',alt:'Supplier image showing phone, watch and earphone charging positions',label:'Three-device layout'},
      {src:'/images/products/jl-s5-wireless-charger/04-charger.webp',alt:'Supplier illustration of foreign-object detection for the wireless charger',label:'Protection description'}
    ],
    sourceLabel:'Alibaba product 11000019709219',
    sourceSnapshot:'Supplier listing reviewed 15 Aug 2026. Values below reproduce the supplied listing data and are not independent verification.',
    supplierClaims:[
      ['Listing title','15W 3-in-1 Magnetic Wireless Charger for Phone, Watch and Earphone'],
      ['Model number','YBD-S5 display model; original supplier listing includes conflicting model references'],
      ['Brand name','YBD Global'],
      ['Product name','3 in 1 Wireless Charger'],
      ['Type','Fast Charger; Wireless Charger; 3 in 1 Wireless Charging Station'],
      ['Port','Type-C'],
      ['Input entries','Attribute table: 100–240V/0.2A; parameter image: 5V/3A or 9V/3A'],
      ['Output entries','5V/1A; 5V/1.2A; 5V/1.5A'],
      ['Output-power entries','15W; 2.5W; 5W'],
      ['Supplier output mapping','Phone up to 15W; watch 2.5W; earphone 5W — compatibility and test evidence pending'],
      ['Additional phone power entry','15W / 10W / 7.5W / 5W automatic identification'],
      ['Function','Wireless charger'],
      ['Feature','Magnetic wireless charging; supplier description also lists automatic 180° rotation'],
      ['Protection','Short circuit; OVP; OTP; OLP; OCP; low tension; over-charging; overcurrent; overvoltage'],
      ['Additional protection description','Foreign-object detection and EMF shielding are stated in supplier content — evidence pending'],
      ['Material','PC fireproof material; ABS; supplier image additionally states PMMA'],
      ['Private mold','Yes'],
      ['Usage','Mobile phone; earphone; smart watch; universal'],
      ['Color','Dark Grey; supplier image says gun color'],
      ['Dimensions / weight in image','107 × 66 × 66 mm; 248 ± 5 g'],
      ['Place of origin','Guangdong, China'],
      ['Warranty','12 months — policy pending'],
      ['Certificate listings','FCC; CE Declaration of Conformity; RoHS; CE — model scope and documents pending'],
      ['Source inconsistency','Original listing model references and AC-input vs Type-C DC-input data require an exact SKU sheet']
    ],
    packagingClaims:[
      ['Listing price tiers','US$9.90 at 10–199; US$9.74 at 200–4,999; US$9.20 at 5,000–9,999; US$8.72 at 10,000+ — reconfirm'],
      ['Selling units','Single item'],
      ['Single package size','7.2 × 7.2 × 13.2 cm'],
      ['Single gross weight','0.3 kg'],
      ['Packaging customization','From +US$0.30/piece; minimum 500 pieces — reconfirm by quotation'],
      ['Lead time: 1–100 pieces','7 days — current quotation confirmation required'],
      ['Lead time: over 100 pieces','To be negotiated']
    ] },
  { model:'100W USB 3.2 20Gbps USB-C Full-Feature Cable', slug:'/products/usb-cables/usb-3-2-20gbps-100w-cable/', family:'USB Cable', interface:'USB-C to USB-C; supplier lists USB 3.2 connector', power:'Supplier lists PD 3.0, 100W, 20V/5A and 5A fast charging; E-marker and test evidence pending', dataRate:'Supplier lists USB 3.2 / 20 Gbps and Thunderbolt 3 support; compliance evidence pending', video:'Supplier lists up to 8K at 60Hz; source, display, mode and test evidence pending', material:'PVC jacket; conductor described as both tinned copper and pure copper; shielding details require confirmation', lengths:'0.25 m / 0.5 m / 1 m / 1.5 m / 2 m listed', bestFor:'Laptop, dock, external-storage, display and high-performance USB-C accessory programs', customization:['Black color','Five listed lengths','Polybag','Logo, construction and packaging require quotation'], proofStatus:'Supplier listing captured; USB version, Thunderbolt compatibility, data rate, video, power and compliance require model-level evidence', detailReady:true, cardFacts:[{label:'Power',value:'100W listed'},{label:'Data',value:'20 Gbps listed'},{label:'Display',value:'8K / 60Hz listed'}],
    images:[
      {src:'/images/products/usb32-20gbps-100w/01-main.webp',alt:'Black USB-C to USB-C PVC cable with supplier performance labels on the connector housings',label:'Product view'},
      {src:'/images/products/usb32-20gbps-100w/02-feature.webp',alt:'Supplier image listing 100W, 8K and 20Gbps functions and cable lengths',label:'Listed full-function format'},
      {src:'/images/products/usb32-20gbps-100w/03-detail.webp',alt:'Supplier image illustrating the listed 100W PD charging function',label:'Listed charging function'},
      {src:'/images/products/usb32-20gbps-100w/04-cable.webp',alt:'Supplier image illustrating the listed 20Gbps data-transfer function',label:'Listed data function'}
    ],
    sourceUrl:'https://www.alibaba.com/product-detail/PD100W-USB-3-2-20Gbps-ThunderBolt_1601207269966.html',
    sourceLabel:'Alibaba product 1601207269966',
    sourceSnapshot:'Supplier listing reviewed 15 Aug 2026. Values below reproduce the supplied listing data and are not independent verification.',
    supplierClaims:[
      ['Listing title','PD100W USB 3.2 20Gbps Thunderbolt 3 Type-C to Type-C PVC Cable with 8K 60Hz'],
      ['Model number','Not stated in the supplied listing fields'],
      ['Brand name','YBD Global'],
      ['USB type / interface','Type-C / USB-Type-C'],
      ['Connectors','USB 3.2 connector'],
      ['Type','type-c usb cable; Fast charging cable'],
      ['Function','5A Fast Charging'],
      ['Power description','PD 3.0; up to 100W; 20V/5A — evidence pending'],
      ['Data description','USB 3.2; 20 Gbps — protocol and test evidence pending'],
      ['Compatibility description','Thunderbolt 3 support — not presented as certification'],
      ['Video description','Up to 8K at 60Hz — exact mode and test conditions pending'],
      ['Material / jacket','PVC / PVC'],
      ['Conductor','Tinned Copper; Pure Copper — construction wording requires clarification'],
      ['Additional construction claim','Supplier description mentions thickened tinned-copper core and multilayer shielding — records pending'],
      ['Use','Mobile phone; computer'],
      ['Private mold','Yes'],
      ['Color','Black'],
      ['Cable lengths','0.25 m; 0.5 m; 1 m; 1.5 m; 2 m'],
      ['Package','Polybag'],
      ['Place of origin','Guangdong, China'],
      ['Warranty','12 months — policy pending'],
      ['Certification listing','CE; RoHS; FCC; EN 55032 — model scope and documents pending']
    ],
    packagingClaims:[
      ['Listing price / MOQ snapshot','US$1.18–1.89; minimum order 200 pieces — reconfirm by quotation'],
      ['Selling units','Single item'],
      ['Single package size','15 × 15 × 15 cm'],
      ['Single gross weight','0.1 kg'],
      ['Lead time: 1–500 pieces','7 days — current quotation confirmation required'],
      ['Lead time: over 500 pieces','To be negotiated']
    ] },
  { model:'YBD-YF Series 140W 20Gbps USB-C Full-Function Cable', slug:'/products/usb-cables/usb4-140w-20gbps-full-function-cable/', family:'USB Cable', interface:'USB-C male-to-male and male-to-female cable variants; YBD-YF23 is a USB-A male to USB-C female adapter', power:'Cable-family content lists 28V/5A and 140W; adapter-family content lists 120W; exact model evidence pending', dataRate:'Cable-family content lists 20 Gbps; adapter-family content lists 10 Gbps; USB4 protocol compliance is not yet evidenced', video:'Cable-family content lists up to 8K at 60Hz; exact source, display, mode and model evidence pending', material:'Aluminum / aluminum-alloy / zinc-alloy housings with a supplier-described pseudo-silicone jacket', lengths:'0.2 m / 1 m / 1.8 m / 2 m, depending on model', bestFor:'High-power USB-C, dock, display, storage and extension-cable sourcing programs that require a defined model matrix', customization:['Yellow cable family','Straight or spring cable','Male-to-male or male-to-female','Customized OEM logo and packaging require quotation'], proofStatus:'Supplier listing captured; connector, model, USB4 protocol, 140W/120W, 20/10Gbps, 8K60Hz, charging-protocol and compliance evidence pending', detailReady:true, cardFacts:[{label:'Power',value:'140W listed'},{label:'Data',value:'20 Gbps listed'},{label:'Display',value:'8K / 60Hz listed'}],
    images:[
      {src:'/images/products/usb4-140w-20gbps/01-main.webp',alt:'Yellow coiled USB-C male-to-male cable with 20Gbps markings on the connector housings',label:'Spring-cable product view'},
      {src:'/images/products/usb4-140w-20gbps/02-feature.webp',alt:'Supplier model matrix showing USB-C male and female straight and spring cable variants plus a USB adapter',label:'Model and connector matrix'},
      {src:'/images/products/usb4-140w-20gbps/03-feature.webp',alt:'Supplier image showing the yellow USB-C cable family and listed 140W 20Gbps and 8K60Hz functions',label:'Listed cable-family functions'},
      {src:'/images/products/usb4-140w-20gbps/05-feature.webp',alt:'Supplier illustration of the listed 8K at 60Hz display function',label:'Listed cable display function'},
      {src:'/images/products/usb4-140w-20gbps/06-feature.webp',alt:'Supplier illustration of the listed 20Gbps transfer function for a USB-C cable',label:'Listed cable data function'}
    ],
    variantGroups:[
      {model:'YBD-YF21',format:'Spring cable',connector:'USB-C male to male',length:'1.8 m',capability:'Cable-family claims: 140W · 20Gbps · 8K60Hz'},
      {model:'YBD-YF21F',format:'Spring extension',connector:'USB-C male to female',length:'1.8 m',capability:'Confirm pass-through behavior by sample'},
      {model:'YBD-YF22',format:'Straight cable',connector:'USB-C male to male',length:'0.2 / 1 / 2 m',capability:'Cable-family claims: 140W · 20Gbps · 8K60Hz'},
      {model:'YBD-YF22F',format:'Straight extension',connector:'USB-C male to female',length:'0.2 / 1 m',capability:'Confirm pass-through behavior by sample'},
      {model:'YBD-YF23',format:'Compact adapter',connector:'USB-A male to USB-C female',length:'Adapter',capability:'Separately listed: 120W · 10Gbps; video unclear'}
    ],
    featureHighlights:[
      {title:'Power',value:'Up to 140W',note:'Cable family lists 28V/5A. Confirm E-marker, charging profile and exact model.',image:'/images/products/usb4-140w-20gbps/03-feature.webp',alt:'Supplier image showing the listed 140W cable family'},
      {title:'Data',value:'Up to 20Gbps',note:'Cable family claim only. USB4 protocol compliance and test report remain pending.',image:'/images/products/usb4-140w-20gbps/06-feature.webp',alt:'Supplier illustration of 20Gbps data transfer'},
      {title:'Display',value:'Up to 8K60Hz',note:'Confirm source, display, mode, cable length and validation record.',image:'/images/products/usb4-140w-20gbps/05-feature.webp',alt:'Supplier illustration of 8K60Hz display output'}
    ],
    sourceLabel:'Alibaba product 1601029516523',
    sourceSnapshot:'Supplier listing reviewed 15 Aug 2026. Values below reproduce the current listing data and are not independent verification.',
    supplierClaims:[
      ['Listing title','8K UHD Type-C Cable, 140W, 20Gbps, 8K 60Hz and adapter-cable family'],
      ['Brand name','YBD Global'],
      ['Model numbers','YBD-YF21; YBD-YF21F; YBD-YF22; YBD-YF22F; YBD-YF23'],
      ['Product name','8K60Hz Type-C UHD cable'],
      ['USB type','Type-C to Type-C'],
      ['Connectors','USB4 connector — protocol compliance evidence pending'],
      ['Listed cable models','YBD-YF21: USB-C male-to-male spring cable, 1.8 m; YBD-YF21F: USB-C male-to-female spring cable, 1.8 m; YBD-YF22: USB-C male-to-male straight cable, 0.2/1/2 m; YBD-YF22F: USB-C male-to-female straight cable, 0.2/1 m'],
      ['Listed adapter model','YBD-YF23: USB-A male to USB-C female adapter'],
      ['Cable-family function','Up to 28V/5A, 140W, 20 Gbps and 8K60Hz — model-level evidence pending'],
      ['Adapter-family function','120W and 10 Gbps are listed separately; video support is not clearly specified'],
      ['Function attribute','5A Fast Charging; 140W; 20Gbps; 8K60Hz'],
      ['Type','USB Cable; type-c usb cable; Adapter Cable; USB Cable for iPhone; Fast charging cable'],
      ['Material','Aluminum; aluminum alloy; silicone; zinc alloy'],
      ['Jacket','Pseudo silicone'],
      ['Use','MP3/MP4 player; video-game player; mobile phone; computer; multimedia; Android; iOS; tablet; power bank; earphone'],
      ['Private mold','Yes'],
      ['Color / variants','Yellow male-to-male; yellow male-to-female; yellow spring-cable male-to-male; yellow spring-cable male-to-female'],
      ['Cable lengths','0.2 m; 1 m; 1.8 m; 2 m — availability depends on model'],
      ['Packing','Polybag'],
      ['Logo','Customized OEM logo listed'],
      ['Warranty','12 months — policy pending'],
      ['Certification listings','FCC; RoHS; CE; EN 55032 — exact model scope and documents pending'],
      ['Source boundary','The listing combines multiple cable and adapter models; capability must be confirmed against the ordered model before quotation']
    ],
    packagingClaims:[
      ['Listing price / MOQ snapshot','US$3.60–5.60; minimum order 100 pieces — reconfirm by quotation'],
      ['Selling units','Single item'],
      ['Single package size','16 × 8 × 2 cm'],
      ['Single gross weight','0.099 kg'],
      ['Packaging customization','From +US$0.30/piece; minimum 500 pieces — reconfirm by quotation'],
      ['Lead time: 1–10 pieces','7 days — current quotation confirmation required'],
      ['Lead time: over 10 pieces','To be negotiated']
    ] },
];

export const findProductByRoute = (route:string) => products.find((p)=>p.slug===route);
export function productsForRoute(route:string) {
  if (route==='/' || route==='/products/') return products;
  if (route.includes('/usb-cables')) return products.filter(p=>p.family==='USB Cable');
  if (route.includes('/hdmi-cables')) return products.filter(p=>p.family==='HDMI Cable');
  if (route.includes('/displayport-cables')) return products.filter(p=>p.family==='DisplayPort');
  if (route.includes('/hubs-docking')) return products.filter(p=>p.family==='Hub & Dock');
  if (route.includes('/chargers')) return products.filter(p=>p.family==='Charger');
  if (route.includes('/solutions') || route.includes('/oem-odm')) return products;
  return [];
}
