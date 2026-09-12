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
      {src:'/images/products/pd60w-100w-braided/03-detail.webp',alt:'Supplier image illustrating charging and data transfer',label:'Listed data function'},
      {src:'/images/products/pd60w-100w-braided/07-pastel-color-options.webp',alt:'Pastel braided USB-C to USB-C cable color options on a white background',label:'Pastel color options'},
      {src:'/images/products/pd60w-100w-braided/08-coiled-color-set.webp',alt:'Coiled braided USB-C to USB-C cable color set arranged on a wood surface',label:'Coiled color set'}
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
  { model:'Premium Quality PD 100W Type C to Type C Fast Data Cable', slug:'/products/usb-cables/premium-100w-type-c-to-type-c-fast-data-cable/', family:'USB Cable', interface:'Type-C to Type-C / USB-C to USB-C cable for mobile phones, notebooks, laptops and USB-C device programs', power:'PD 100W and 5A fast charging listed; exact PD profile, E-marker and charger/device pairing require selected-SKU confirmation', dataRate:'Fast data cable wording and USB 3.0 connector wording listed; exact data rate requires model confirmation', video:'Not positioned for display output', material:'Nylon braided jacket, aluminum-alloy shell and pure copper conductor listed', lengths:'1 m / 2 m listed', bestFor:'Mobile-phone, notebook, laptop, MacBook and USB-C accessory programs that need low MOQ, private-label logo and custom packaging review', customization:['MOQ 100 pcs','1 m: US$0.85 / piece','2 m: US$1.20 / piece','Custom logo supported','Custom packaging supported','1 m / 2 m options by quotation'], proofStatus:'User-provided title, parameter screenshot, commercial terms and product images captured; exact 100W/5A profile, USB data behavior, conductor, logo, packaging and RoHS document scope require selected-model evidence', detailReady:true, cardLabel:'100W 5A Type-C cable', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'1 m',value:'US$0.85 / piece'},{label:'2 m',value:'US$1.20 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/premium-100w-type-c-to-type-c-cable/01-main.webp',alt:'Black braided USB-C to USB-C 100W data cable with blue aluminum connector housings',label:'Product view'},
      {src:'/images/products/premium-100w-type-c-to-type-c-cable/05-product-view.webp',alt:'USB-C to USB-C braided cable product view on a white background',label:'Clean product view'},
      {src:'/images/products/premium-100w-type-c-to-type-c-cable/04-fast-charge.webp',alt:'Supplier image showing 100W fast charge cue for the braided Type-C to Type-C cable',label:'100W fast charge cue'},
      {src:'/images/products/premium-100w-type-c-to-type-c-cable/03-macbook-charging.webp',alt:'Braided USB-C cable connected to a wall charger and notebook with 100W high-power cue',label:'Notebook charging cue'},
      {src:'/images/products/premium-100w-type-c-to-type-c-cable/02-loop-sr-braided.webp',alt:'Supplier durability comparison image for loop strain relief braided cable design',label:'Loop strain relief'},
      {src:'/images/products/premium-100w-type-c-to-type-c-cable/07-parameters.webp',alt:'User-provided parameter table for 100W Type-C to Type-C cable with 5A fast charging',label:'Parameter table'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 100 pcs',note:'User supplied MOQ and length-based pricing are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/premium-100w-type-c-to-type-c-cable/05-product-view.webp',alt:'USB-C to USB-C braided cable product view'},
      {title:'Charging',value:'100W / 5A listed',note:'The request and supplier images list PD 100W and 5A fast charging; confirm E-marker, charging profile and device pairing by sample.',image:'/images/products/premium-100w-type-c-to-type-c-cable/04-fast-charge.webp',alt:'100W fast charge supplier image'},
      {title:'OEM packaging',value:'Logo + packaging',note:'Custom logo and custom packaging are supported by project; artwork, marking method, box type, barcode and carton mark need approval.',image:'/images/products/premium-100w-type-c-to-type-c-cable/03-macbook-charging.webp',alt:'USB-C cable notebook charging image'}
    ],
    sourceSnapshot:'User-provided product title, parameter screenshot, commercial terms and images reviewed 7 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','Premium Quality PD 100W Type c to Type c Fast Data Cable, 5A Usb c Fast Charging Cable for Mobiles Notebook'],
      ['Product name','100W Type C to Type C Cable'],
      ['Product format','Type-C to Type-C / USB-C to USB-C fast data and charging cable'],
      ['USB type','Standard'],
      ['Function','5A Fast Charging'],
      ['Power','PD 100W listed by user and supplier images'],
      ['Connectors','USB 3.0 Connector, USB C Connector'],
      ['Type','type-c usb cable, Fast charging cable'],
      ['Material','Nylon, Aluminum Alloy; additional material entry lists Aluminium + Nylon Braid'],
      ['Conductor','Pure Copper'],
      ['Shielding','Non-Shielded listed in supplied parameter table'],
      ['Jacket','Nylon'],
      ['Private mold','Yes'],
      ['Brand Name','OEM'],
      ['Model number','NSCB1008'],
      ['Optional Length','1m | 2m'],
      ['Use','MP3 / MP4 player, video game player, mobile phone, Android, iOS and tablet wording shown in supplied parameter table'],
      ['Application','Mobile phone and electronic product wording shown in supplied parameter table'],
      ['Certification','RoHS listed; document scope pending'],
      ['Place of origin','Guangdong, China'],
      ['Compatibility cue','Cellphone, MacBooks, laptop/MacBook and Type-C device use shown in supplied images; exact compatibility requires sample validation']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['Price: 1 m','US$0.85 / piece'],
      ['Price: 2 m','US$1.20 / piece'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Custom packaging supported'],
      ['Customization','Branding and package artwork by project; confirm logo position, marking method, box type, barcode and carton mark'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'5A 100W PD Double Elbow 90 Degree USB C to C Fast Charging Data Cable Nylon Braided Charger Cable for Tablets and Computers', slug:'/products/usb-cables/100w-pd-double-elbow-usb-c-to-c-cable/', family:'USB Cable', interface:'90-degree double elbow USB-C to USB-C cable for tablet, computer and mobile-device accessory programs', power:'PD 100W and 5A fast charging listed; exact PD profile, E-marker and charger/device pairing require selected-SKU confirmation', dataRate:'Fast charging data cable wording listed; exact data rate requires model confirmation', video:'Not positioned for display output', material:'Nylon braided cable jacket listed; purple and black 90-degree connector housing shown in supplied images; exact shell material requires source confirmation', lengths:'0.5 m / 1 m / 2 m listed', bestFor:'Tablet, computer, notebook, mobile gaming and private-label USB-C cable programs that need a 90-degree double elbow cable format', customization:['MOQ 50 pcs','0.5 m: US$1.30 / piece','1 m: US$1.45 / piece','2 m: US$1.80 / piece','Custom logo supported','Length and logo details by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact 100W/5A profile, data behavior, material stack, logo marking and compliance scope require selected-model evidence', detailReady:true, cardLabel:'90-degree 100W cable', cardFacts:[{label:'MOQ',value:'50 pcs'},{label:'0.5 m',value:'US$1.30 / piece'},{label:'1 m',value:'US$1.45 / piece'},{label:'2 m',value:'US$1.80 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/100w-pd-double-elbow-usb-c-to-c-cable/01-main.webp',alt:'Purple and black double elbow USB-C to USB-C nylon braided cable on a white background',label:'Product view'},
      {src:'/images/products/100w-pd-double-elbow-usb-c-to-c-cable/02-100w-flash-charging.webp',alt:'Supplier image showing 100W fast charging and 90-degree elbow USB-C cable feature cues',label:'100W feature cue'},
      {src:'/images/products/100w-pd-double-elbow-usb-c-to-c-cable/03-gaming-elbow-use.webp',alt:'90-degree USB-C elbow cable connected to a mobile phone during gaming use',label:'Gaming elbow use'},
      {src:'/images/products/100w-pd-double-elbow-usb-c-to-c-cable/04-pd100w-feature.webp',alt:'PD 100W fast charging cable image with double elbow USB-C connector design',label:'PD 100W cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 50 pcs',note:'User supplied MOQ and length-based pricing are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/100w-pd-double-elbow-usb-c-to-c-cable/01-main.webp',alt:'Double elbow USB-C to USB-C braided cable product view'},
      {title:'90-degree format',value:'Double elbow',note:'The supplied images show both USB-C connector ends in a 90-degree elbow format for tablet, computer and mobile-use review.',image:'/images/products/100w-pd-double-elbow-usb-c-to-c-cable/03-gaming-elbow-use.webp',alt:'90-degree USB-C elbow cable connected to a mobile phone'},
      {title:'Charging',value:'100W / 5A listed',note:'The request and supplier images list PD 100W and 5A fast charging; confirm E-marker, charging profile and device pairing by sample.',image:'/images/products/100w-pd-double-elbow-usb-c-to-c-cable/04-pd100w-feature.webp',alt:'PD 100W double elbow USB-C cable supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 8 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','5A 100W PD Double Elbow 90 Degree USB C to C Fast Charging Data Cable Nylon Braided Charger Cable for Tablets and Computers'],
      ['Product format','Double elbow 90-degree USB-C to USB-C fast charging data cable'],
      ['Function','5A / 100W PD fast charging listed by user and supplier images'],
      ['Connectors','USB-C to USB-C / C-to-C connector format shown in supplied images'],
      ['Design','90-degree double elbow connector design'],
      ['Material','Nylon braided charger cable listed in title'],
      ['Color cue','Purple connector housings with black braided cable shown in supplied images'],
      ['Use','Tablets and computers listed; mobile phone gaming use shown in supplied images'],
      ['Optional length','0.5 m / 1 m / 2 m listed by user'],
      ['Logo support','Custom logo supported'],
      ['Certification','Not provided in supplied material; document scope pending'],
      ['Place of origin','Not provided in supplied material']
    ],
    packagingClaims:[
      ['MOQ','50 pcs'],
      ['Price: 0.5 m','US$1.30 / piece'],
      ['Price: 1 m','US$1.45 / piece'],
      ['Price: 2 m','US$1.80 / piece'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Not provided in supplied material; confirm by project if required'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'PD 100W USB C to C Fast Charging Cable 5A QC4.0 Braided Nylon Type C Data Cable for Laptop Phone Tablet', slug:'/products/usb-cables/pd-100w-usb-c-to-c-braided-cable/', family:'USB Cable', interface:'USB-C to USB-C / Type-C to Type-C cable for laptop, phone and tablet accessory programs', power:'PD 100W, 5A and QC4.0 listed in supplied title and images; exact PD profile, E-marker and charger/device pairing require selected-SKU confirmation', dataRate:'Type-C data cable wording listed; exact data rate requires model confirmation', video:'Not positioned for display output', material:'Braided nylon cable jacket listed; purple metal-look connector housing shown in supplied images; exact shell material requires source confirmation', lengths:'0.5 m / 1 m / 2 m / 3 m listed', bestFor:'Laptop, tablet, phone, notebook, wholesale and private-label USB-C cable programs needing 100W charging cues and low-MOQ logo review', customization:['MOQ 50 pcs','0.5 m: US$1.10 / piece','1 m: US$1.35 / piece','2 m: US$1.75 / piece','3 m: US$2.10 / piece','Custom logo supported','Length and logo details by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact PD 100W, 5A, QC4.0 behavior, data rate, material stack, logo marking and compliance scope require selected-model evidence', detailReady:true, cardLabel:'PD 100W braided C-to-C', cardFacts:[{label:'MOQ',value:'50 pcs'},{label:'0.5 m',value:'US$1.10 / piece'},{label:'1 m',value:'US$1.35 / piece'},{label:'2 m',value:'US$1.75 / piece'},{label:'3 m',value:'US$2.10 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/pd-100w-usb-c-to-c-braided-cable/01-main.webp',alt:'PD 100W USB-C to USB-C braided nylon cable with purple connector housings and QC4.0 feature text',label:'Product view'},
      {src:'/images/products/pd-100w-usb-c-to-c-braided-cable/02-clean-product-view.webp',alt:'Clean product image of a black braided USB-C to USB-C fast charging cable with purple connector housings',label:'Clean product view'},
      {src:'/images/products/pd-100w-usb-c-to-c-braided-cable/03-device-compatibility.webp',alt:'Supplier image showing PD 100W USB-C cable compatibility cues for phones, tablets and notebooks',label:'Device compatibility cue'},
      {src:'/images/products/pd-100w-usb-c-to-c-braided-cable/04-100w-5a-feature.webp',alt:'Supplier image showing 100W fast charging data cable and 5A high current cues',label:'100W and 5A cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 50 pcs',note:'User supplied MOQ and length-based pricing are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/pd-100w-usb-c-to-c-braided-cable/02-clean-product-view.webp',alt:'USB-C to USB-C braided cable product view'},
      {title:'Charging',value:'100W / 5A listed',note:'The supplied title and images list PD 100W, 5A and QC4.0 cues; confirm E-marker, charging profile and device pairing by sample.',image:'/images/products/pd-100w-usb-c-to-c-braided-cable/04-100w-5a-feature.webp',alt:'100W fast charging and 5A high current supplier image'},
      {title:'OEM logo',value:'Logo supported',note:'Custom logo can be reviewed by project; confirm artwork, placement and marking method before sample approval.',image:'/images/products/pd-100w-usb-c-to-c-braided-cable/03-device-compatibility.webp',alt:'PD 100W USB-C cable compatibility supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 8 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','PD 100W USB C to C Fast Charging Cable 5A QC4.0 Braided Nylon Type C Data Cable for Laptop Phone Tablet'],
      ['Product format','USB-C to USB-C / Type-C to Type-C fast charging data cable'],
      ['Function','PD 100W, 5A and QC4.0 fast charging cues listed by user and supplied images'],
      ['Connectors','USB-C to USB-C / C-to-C connector format shown in supplied images'],
      ['Material','Braided nylon cable jacket listed in title'],
      ['Color cue','Purple connector housings with black braided cable shown in supplied images'],
      ['Use','Laptop, phone and tablet listed; notebooks and mobile phones shown in supplied images'],
      ['Optional length','0.5 m / 1 m / 2 m / 3 m listed by user'],
      ['Logo support','Custom logo supported'],
      ['Certification','Not provided in supplied material; document scope pending'],
      ['Place of origin','Not provided in supplied material']
    ],
    packagingClaims:[
      ['MOQ','50 pcs'],
      ['Price: 0.5 m','US$1.10 / piece'],
      ['Price: 1 m','US$1.35 / piece'],
      ['Price: 2 m','US$1.75 / piece'],
      ['Price: 3 m','US$2.10 / piece'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Not provided in supplied material; confirm by project if required'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'6A Fast Charging Cable USB Type-C Data Cable 100W 1m 2m 3m USB A to USB C Data Cable for Mobile Phones Macbooks and Tablets', slug:'/products/usb-cables/6a-100w-usb-a-to-usb-c-braided-cable/', family:'USB Cable', interface:'USB-A to USB-C / Type-C cable for mobile phone, MacBook and tablet accessory programs', power:'6A, 100W and Huawei/Honor super fast charging cues listed in supplied title and images; exact charger/device pairing and protocol behavior require selected-SKU confirmation', dataRate:'USB Type-C data cable wording listed; exact data rate requires model confirmation', video:'Not positioned for display output', material:'Nylon woven / braided cable jacket listed; aluminum-alloy woven data cable wording appears in supplied image; exact shell and cable material require source confirmation', lengths:'0.5 m / 1 m / 2 m / 3 m listed', bestFor:'Mobile-phone, tablet, MacBook, Huawei/Honor, Xiaomi and private-label USB-A to USB-C charging-cable programs needing low-MOQ logo review', customization:['MOQ 50 pcs','0.5 m: US$0.80 / piece','1 m: US$1.00 / piece','2 m: US$1.35 / piece','3 m: US$1.70 / piece','Custom logo supported','Length and logo details by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact 6A, 100W, Huawei/Honor fast charging behavior, data rate, material stack, logo marking and compliance scope require selected-model evidence', detailReady:true, cardLabel:'6A 100W USB-A to USB-C', cardFacts:[{label:'MOQ',value:'50 pcs'},{label:'0.5 m',value:'US$0.80 / piece'},{label:'1 m',value:'US$1.00 / piece'},{label:'2 m',value:'US$1.35 / piece'},{label:'3 m',value:'US$1.70 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/6a-100w-usb-a-to-usb-c-braided-cable/03-usb-a-to-c-product.webp',alt:'USB-A to USB-C braided cable product image with 6A large-current and Huawei Xiaomi support cues',label:'Product view'},
      {src:'/images/products/6a-100w-usb-a-to-usb-c-braided-cable/04-super-fast-charging.webp',alt:'Supplier image showing USB-A to USB-C cable with Huawei super fast charging and 100W feature cues',label:'100W super fast charging cue'},
      {src:'/images/products/6a-100w-usb-a-to-usb-c-braided-cable/02-huawei-honor-100w.webp',alt:'Supplier image showing 100W Huawei Honor super fast charging with 20V 5A charger cue',label:'Huawei Honor charging cue'},
      {src:'/images/products/6a-100w-usb-a-to-usb-c-braided-cable/01-nylon-durability.webp',alt:'Close-up of black nylon woven cable jacket with durability and wear-resistance text',label:'Nylon durability cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 50 pcs',note:'User supplied MOQ and length-based pricing are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/6a-100w-usb-a-to-usb-c-braided-cable/03-usb-a-to-c-product.webp',alt:'USB-A to USB-C braided cable product view'},
      {title:'Charging',value:'6A / 100W listed',note:'The supplied title and images list 6A, 100W and Huawei/Honor super fast charging cues; confirm protocol behavior by sample.',image:'/images/products/6a-100w-usb-a-to-usb-c-braided-cable/02-huawei-honor-100w.webp',alt:'Huawei Honor 100W charging supplier image'},
      {title:'Construction',value:'Nylon braid listed',note:'Supplied images emphasize nylon weaving, wear resistance and durability; material and bend-test claims need source confirmation.',image:'/images/products/6a-100w-usb-a-to-usb-c-braided-cable/01-nylon-durability.webp',alt:'Nylon braided cable durability close-up'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 9 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','6A Fast Charging Cable USB Type-C Data Cable 100W 1m 2m 3m USB a to USB C Data Cable for Mobile Phones Macbooks and Tablets'],
      ['Product format','USB-A to USB-C / Type-C fast charging data cable'],
      ['Function','6A, 100W and Huawei/Honor super fast charging cues listed by user and supplied images'],
      ['Charging condition cue','Supplied image states 20V/5A charger outputs 100W max high power; verify charger, device and cable combination before publication'],
      ['Connectors','USB-A to USB-C connector format shown in supplied images'],
      ['Material','Nylon woven / braided jacket listed in supplied images and title'],
      ['Additional material cue','100W aluminum alloy woven data cable wording appears in supplied image; exact shell material requires confirmation'],
      ['Durability cue','Wear-resistant, tear-resistant and tough/durable wording shown in supplied images; test evidence pending'],
      ['Use','Mobile phones, MacBooks and tablets listed by user; Huawei/Honor and Xiaomi support cues shown in supplied images'],
      ['Optional length','0.5 m / 1 m / 2 m / 3 m listed by user'],
      ['Logo support','Custom logo supported'],
      ['Certification','Not provided in supplied material; document scope pending']
    ],
    packagingClaims:[
      ['MOQ','50 pcs'],
      ['Price: 0.5 m','US$0.80 / piece'],
      ['Price: 1 m','US$1.00 / piece'],
      ['Price: 2 m','US$1.35 / piece'],
      ['Price: 3 m','US$1.70 / piece'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Not provided in supplied material; confirm by project if required'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'High Quality 5A USB C PD 100W Straight Elbow Fast Charging Cable Nylon Braided 20V for Computer Charging', slug:'/products/usb-cables/100w-pd-straight-elbow-usb-c-cable/', family:'USB Cable', interface:'USB-C to USB-C straight + 90-degree elbow cable for computer, phone and tablet charging programs', power:'PD 100W, 5A and 20V wording listed; exact PD profile, E-marker, current and device pairing require selected-SKU confirmation', dataRate:'Fast charging cable wording listed; exact data-transfer rate not provided in supplied material', video:'Not positioned for display output', material:'Nylon braided cable jacket listed; purple metal-style connector housing shown in supplied images; exact shell material requires source confirmation', lengths:'0.5 m / 1 m / 2 m / 3 m listed', bestFor:'Computer-charging, notebook, tablet, mobile phone and private-label USB-C cable programs that need one straight connector and one 90-degree elbow connector', customization:['MOQ 50 pcs','0.5 m: US$1.10 / piece','1 m: US$1.30 / piece','2 m: US$1.65 / piece','3 m: US$2.00 / piece','Custom logo supported'], proofStatus:'User-provided title, commercial terms and product images captured; exact 100W/5A/20V profile, E-marker implementation, data behavior, material stack, logo marking, packaging and compliance scope require selected-model evidence', detailReady:true, cardLabel:'Straight elbow 100W cable', cardFacts:[{label:'MOQ',value:'50 pcs'},{label:'0.5 m',value:'US$1.10 / piece'},{label:'1 m',value:'US$1.30 / piece'},{label:'2 m',value:'US$1.65 / piece'},{label:'3 m',value:'US$2.00 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/100w-pd-straight-elbow-usb-c-cable/02-oem-odm-product.webp',alt:'USB-C cable with one straight connector and one 90-degree elbow connector shown with OEM and logo cues',label:'Product view'},
      {src:'/images/products/100w-pd-straight-elbow-usb-c-cable/03-100w-5a-feature.webp',alt:'Supplier image showing 100W PD fast charging cable and 5A current cue',label:'100W 5A cue'},
      {src:'/images/products/100w-pd-straight-elbow-usb-c-cable/01-emarker-phone.webp',alt:'USB-C cable connected to a phone with E-Marker smart chip voltage-stability cue',label:'E-Marker cue'},
      {src:'/images/products/100w-pd-straight-elbow-usb-c-cable/04-elbow-charging.webp',alt:'Straight elbow USB-C cable supplier image showing 5A high current and PD100W support cues',label:'Elbow charging cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 50 pcs',note:'User supplied MOQ and length-based pricing are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/100w-pd-straight-elbow-usb-c-cable/02-oem-odm-product.webp',alt:'Straight and elbow USB-C cable product view'},
      {title:'Charging',value:'100W / 5A / 20V listed',note:'The request and supplier images list PD 100W, 5A and 20V; confirm E-marker, charging profile and device pairing by sample.',image:'/images/products/100w-pd-straight-elbow-usb-c-cable/03-100w-5a-feature.webp',alt:'100W 5A straight elbow USB-C cable supplier image'},
      {title:'Connector format',value:'Straight + elbow',note:'The supplied images show one straight Type-C connector and one 90-degree elbow Type-C connector for computer and phone charging review.',image:'/images/products/100w-pd-straight-elbow-usb-c-cable/04-elbow-charging.webp',alt:'Straight elbow USB-C cable charging image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 9 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','High Quality 5A USB C PD 100W Straight Elbow Fast Charging Cable Nylon Braided 20V for Computer Charging'],
      ['Product format','USB-C straight elbow fast charging cable'],
      ['Connector format','One straight USB-C connector and one 90-degree elbow USB-C connector shown in supplied images'],
      ['Function','PD 100W, 5A and 20V fast charging wording listed by user and supplier images'],
      ['E-Marker cue','Built-in E-Marker smart chip shown in supplied image; implementation evidence pending'],
      ['Material','Nylon braided cable listed in title'],
      ['Color cue','Purple connector housings with black braided cable shown in supplied images'],
      ['Use','Computer charging listed; mobile phone and tablet use shown in supplied images'],
      ['Optional length','0.5 m / 1 m / 2 m / 3 m listed by user'],
      ['Logo support','Custom logo supported'],
      ['OEM/ODM cue','OEM/ODM, packaging, logo and color icons shown in supplied image; project scope requires quotation confirmation'],
      ['Certification','CE/FCC/RoHS icons shown in supplied image; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','50 pcs'],
      ['Price: 0.5 m','US$1.10 / piece'],
      ['Price: 1 m','US$1.30 / piece'],
      ['Price: 2 m','US$1.65 / piece'],
      ['Price: 3 m','US$2.00 / piece'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Packaging icon shown; confirm artwork, box type, barcode and carton mark by project'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'20Gbps PD 100W 20V 5A Fast Charging Type-C to Type C Cable USB3.2 Gen2 USB-C Cable Mobile Phone Available', slug:'/products/usb-cables/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/', family:'USB Cable', interface:'Type-C to Type-C / USB-C to USB-C full-feature cable for mobile phone, laptop, hub, storage and screen-projection review', power:'PD 100W, 20V and 5A fast charging listed; exact PD profile, E-marker, current and device pairing require selected-SKU confirmation', dataRate:'USB3.2 Gen2 and 20Gbps data transmission listed; exact USB version, cable length behavior and tested transfer rate require model evidence', video:'8K and screen projection cues shown in supplied images; exact display mode, source, monitor and cable length require test evidence', material:'High-density braided wire and 16-core copper wire wording shown in supplied image; exact jacket, conductor and shielding stack require source confirmation', lengths:'1 m / 2 m listed', bestFor:'Wholesale full-feature USB-C to USB-C cable programs needing 100W charging, high-speed data, possible screen projection and low-MOQ customization review', customization:['MOQ 50 pcs','1 m: US$1.70 / piece','2 m: US$2.30 / piece','Customization supported','Custom logo supported','Length, logo and packaging details by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact 100W/20V/5A profile, USB3.2 Gen2 / 20Gbps data behavior, 8K screen-projection behavior, conductor count, logo marking, customization and compliance scope require selected-model evidence', detailReady:true, cardLabel:'20Gbps 100W C-to-C', cardFacts:[{label:'MOQ',value:'50 pcs'},{label:'1 m',value:'US$1.70 / piece'},{label:'2 m',value:'US$2.30 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/01-main.webp',alt:'Black braided USB-C to USB-C cable with connector labels showing USB3.2, 20Gbps and 8K cues',label:'Product view'},
      {src:'/images/products/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/02-full-feature.webp',alt:'Supplier image showing 100W, 8K and 20Gbps full-feature Type-C to Type-C data cable cues',label:'Full-feature cue'},
      {src:'/images/products/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/03-20gbps-transmission.webp',alt:'Supplier image showing 20Gbps transmission rate cue for USB-C data cable connected to phone and computer',label:'20Gbps transfer cue'},
      {src:'/images/products/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/04-braided-wire.webp',alt:'Supplier image showing high-density braided wire and 16-core copper wire construction cue',label:'Braided wire cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 50 pcs',note:'User supplied MOQ and 1 m / 2 m pricing are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/01-main.webp',alt:'USB-C to USB-C 20Gbps braided cable product view'},
      {title:'Full-feature cue',value:'100W / 8K / 20Gbps listed',note:'Supplied images list charging, data and screen-projection cues; confirm actual PD, USB and display behavior against the selected SKU.',image:'/images/products/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/02-full-feature.webp',alt:'100W 8K 20Gbps full-feature cable supplier image'},
      {title:'Construction cue',value:'16-core copper listed',note:'The supplied image mentions high-density braided wire and 16-core copper wire; request construction evidence before publishing as a fixed specification.',image:'/images/products/20gbps-pd-100w-type-c-to-type-c-usb3-2-cable/04-braided-wire.webp',alt:'High-density braided wire supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 9 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','20Gbps PD 100W 20V 5A Fast Charging Type-C to Type C Cable USB3.2 Gen2 USB-C Cable Mobile Phone Available'],
      ['Product format','Type-C to Type-C / USB-C to USB-C full-feature fast charging data cable'],
      ['Function','Fast charging, data transmission and screen projection cues shown in supplied images'],
      ['Power / current / voltage cue','PD 100W, 20V and 5A listed by user; 100W charging power shown in supplied image'],
      ['Data cue','USB3.2 Gen2 and 20Gbps listed by user and supplied images; test evidence pending'],
      ['Video cue','8K and screen projection shown in supplied images; display behavior requires source, monitor, mode and cable-length evidence'],
      ['Connectors','Type-C to Type-C / USB-C to USB-C connector format shown in supplied images'],
      ['Material cue','High-density braided wire and 16-core copper wire wording shown in supplied image'],
      ['Compatibility cue','Mobile phone available and Apple 15 series / OTG / headphones / VR hard disk box / HUB cues shown in supplied images'],
      ['Optional length','1 m / 2 m listed by user'],
      ['Customization','Customization supported by user request; final scope by quotation'],
      ['Logo support','Custom logo supported by user request'],
      ['Certification','Not provided in supplied material; document scope pending']
    ],
    packagingClaims:[
      ['MOQ','50 pcs'],
      ['Price: 1 m','US$1.70 / piece'],
      ['Price: 2 m','US$2.30 / piece'],
      ['Customization','Supported; confirm color, length, housing, logo, package and artwork scope by quotation'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Not specified in supplied material; confirm by project if required'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'PD 60W USB a to Type C USB3.2 10Gbps Fast Charging Cable Nylon Braided 0.2m-3m High Speed Data Cord Wholesale', slug:'/products/usb-cables/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/', family:'USB Cable', interface:'USB-A to Type-C / USB-C cable for phone, tablet, computer and high-speed accessory programs', power:'PD 60W, 3A safe charging and 56K resistor wording listed in supplied images; exact protocol, current and device pairing require selected-SKU confirmation', dataRate:'USB3.2 and 10Gbps high-speed data wording listed; exact USB version and tested transfer rate require model evidence', video:'Not positioned for display output', material:'Nylon braided cable jacket listed; black molded connector housing shown in supplied images; exact shell material requires source confirmation', lengths:'0.2 m / 0.5 m / 1 m / 1.5 m / 2 m / 3 m listed', bestFor:'Wholesale USB-A to Type-C fast charging and high-speed data cable programs for phones, tablets, computers and private-label accessory ranges', customization:['MOQ 50 pcs','0.2 m: US$0.95 / piece','0.5 m: US$1.10 / piece','1 m: US$1.35 / piece','1.5 m: US$1.52 / piece','2 m: US$1.75 / piece','3 m: US$2.39 / piece','Logo and packaging requirements by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact PD 60W behavior, 3A current, USB3.2 / 10Gbps data performance, 56K resistor implementation, material stack, logo marking, packaging and compliance scope require selected-model evidence', detailReady:true, cardLabel:'60W USB-A to Type-C 10Gbps', cardFacts:[{label:'MOQ',value:'50 pcs'},{label:'0.2 m',value:'US$0.95 / piece'},{label:'1 m',value:'US$1.35 / piece'},{label:'2 m',value:'US$1.75 / piece'},{label:'3 m',value:'US$2.39 / piece'}],
    images:[
      {src:'/images/products/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/01-main.webp',alt:'Black braided USB-A to Type-C fast charging data cable close-up with USB-A and USB-C connectors',label:'Product view'},
      {src:'/images/products/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/03-10gbps-usb32.webp',alt:'Supplier image showing USB3.2 to Type-C data cable with 10Gbps high-speed transmission and 60W max cue',label:'10Gbps data cue'},
      {src:'/images/products/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/02-60w-fast-charge.webp',alt:'Supplier image showing 60W safe fast charge cue for USB-A to Type-C braided cable',label:'60W charging cue'},
      {src:'/images/products/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/04-56k-resistor.webp',alt:'Supplier image showing built-in 56K resistor and stable current protection cue for Type-C connector',label:'56K resistor cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 50 pcs',note:'User supplied MOQ and length-based pricing are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/01-main.webp',alt:'USB-A to Type-C braided cable product view'},
      {title:'Data transfer',value:'10Gbps listed',note:'The supplied title and image list USB3.2 and 10Gbps transmission; confirm tested speed, connector build and device compatibility by selected sample.',image:'/images/products/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/03-10gbps-usb32.webp',alt:'10Gbps USB3.2 supplier image'},
      {title:'Charging protection',value:'60W / 3A / 56K listed',note:'Supplied images list 60W max, 3A safe charging and a built-in 56K resistor cue; confirm protocol behavior and protection design before publication.',image:'/images/products/pd-60w-usb-a-to-type-c-usb3-2-10gbps-cable/04-56k-resistor.webp',alt:'56K resistor protection supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 9 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','PD 60W USB a to Type C USB3.2 10Gbps Fast Charging Cable Nylon Braided 0.2m-3m High Speed Data Cord Wholesale'],
      ['Product format','USB-A to Type-C / USB-C fast charging data cable'],
      ['Function','PD 60W fast charging and high-speed data cable wording listed by user and supplied images'],
      ['Data cue','USB3.2 and 10Gbps high-speed transmission listed in supplied image; test evidence pending'],
      ['Power / current cue','60W max and 3A safe charging shown in supplied image; verify charger, device and cable combination before publication'],
      ['Protection cue','Built-in 56K resistor wording shown in supplied image; implementation evidence pending'],
      ['Connectors','USB-A to Type-C connector format shown in supplied images'],
      ['Material','Nylon braided cable jacket listed in title'],
      ['Color cue','Black braided cable and black connector housings shown in supplied images'],
      ['Use','Phones, tablets, computers and mainstream Type-C device cues shown in supplied title/images'],
      ['Optional length','0.2 m / 0.5 m / 1 m / 1.5 m / 2 m / 3 m listed by user'],
      ['Certification','Not provided in supplied material; document scope pending']
    ],
    packagingClaims:[
      ['MOQ','50 pcs'],
      ['Price: 0.2 m','US$0.95 / piece'],
      ['Price: 0.5 m','US$1.10 / piece'],
      ['Price: 1 m','US$1.35 / piece'],
      ['Price: 1.5 m','US$1.52 / piece'],
      ['Price: 2 m','US$1.75 / piece'],
      ['Price: 3 m','US$2.39 / piece'],
      ['Logo support','Not specified in supplied text; confirm logo requirements by quotation if needed'],
      ['Custom packaging','Not specified in supplied material; confirm by project if required'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'YBD Transparent 65W Fast Charge Type-C Cable', slug:'/products/usb-cables/transparent-65w-fast-charge-type-c-cable/', family:'USB Cable', interface:'Type-C to Type-C cable for iPhone and USB-C mobile devices', power:'65W and PD 3A fast charging listed; exact profile requires selected-sample confirmation', dataRate:'Charging cable positioning; data-transfer rate not provided in supplied material', video:'Not positioned for display output', material:'PVC listed in key attributes; title mentions TPE and pure copper conductor', lengths:'1 m listed in title', bestFor:'iPhone 16, USB-C smartphone, mobile-phone accessory, ecommerce and private-label cable programs that need a transparent braided 65W Type-C cable', customization:['Customization supported','Custom packaging supported','Color and gradient finish by quotation','Exact connector and package artwork locked before sample approval'], proofStatus:'User-provided title, key-attribute screenshot, price terms and product images captured; exact material stack, charging profile, conductor, compatibility, packaging and compliance require source evidence', detailReady:true, cardLabel:'Transparent 65W Type-C', cardFacts:[{label:'100-1000 pcs',value:'US$0.60 / piece'},{label:'1000+ pcs',value:'US$0.56 / piece'},{label:'Length',value:'1 m listed'},{label:'Packaging',value:'Custom supported'}],
    images:[
      {src:'/images/products/transparent-65w-type-c-cable/02-65w-gradient.webp',alt:'Transparent 65W Type-C fast charging braided cable with gradient ice crystal connector shell',label:'65W gradient cable'},
      {src:'/images/products/transparent-65w-type-c-cable/01-iphone16-fit.webp',alt:'Transparent Type-C cable connector shown with iPhone 16 USB-C compatibility cue',label:'iPhone 16 compatibility cue'},
      {src:'/images/products/transparent-65w-type-c-cable/03-crystal-gradient.webp',alt:'Transparent gradient Type-C cable with ice crystal shell and braided cable options',label:'Crystal gradient options'},
      {src:'/images/products/transparent-65w-type-c-cable/04-green-product.webp',alt:'Green transparent Type-C to Type-C braided cable product view on white background',label:'Green product view'},
      {src:'/images/products/transparent-65w-type-c-cable/05-pink-product.webp',alt:'Pink transparent Type-C to Type-C braided cable product view on white background',label:'Pink product view'},
      {src:'/images/products/transparent-65w-type-c-cable/06-durability.webp',alt:'Transparent ice crystal Type-C cable durability comparison image with bend detail',label:'Durability cue'}
    ],
    featureHighlights:[
      {title:'Fast charging',value:'65W / 3A listed',note:'Confirm PD profile, current, device compatibility and cable construction before final order.',image:'/images/products/transparent-65w-type-c-cable/02-65w-gradient.webp',alt:'Transparent 65W Type-C cable supplier image'},
      {title:'Transparent shell',value:'Ice crystal style',note:'Gradient color, transparent connector shell and braided jacket are shown in supplied product images.',image:'/images/products/transparent-65w-type-c-cable/03-crystal-gradient.webp',alt:'Transparent gradient Type-C cable with three color options'},
      {title:'Packaging',value:'Custom supported',note:'Custom packaging is supported by project; confirm artwork, box type, barcode and carton mark before production.',image:'/images/products/transparent-65w-type-c-cable/01-iphone16-fit.webp',alt:'Type-C cable connector with mobile-phone compatibility cue'}
    ],
    sourceSnapshot:'User-provided product title, key-attribute screenshot, commercial terms and images reviewed 2 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','Transparent 65W Fast Charge Type-C Cable 1m PD 3A Fast Charging Braid Shielding TPE Pure Copper Conductor for iPhone'],
      ['Product format','Transparent Type-C fast charging cable'],
      ['Connectors','For Iphone listed in key attributes; Type-C connector shown in images'],
      ['Type','Usb Cable; Usb Cable for Iphone; Fast charging cable'],
      ['Use','mobile phone, Camera, Computer and other listed uses shown truncated in screenshot'],
      ['Function','3A Fast Charging'],
      ['Power','65W listed in title and product images'],
      ['Length','1 m listed in title'],
      ['Material','PVC listed in key attributes; title mentions TPE'],
      ['Conductor','Pure copper conductor listed in title'],
      ['Shielding','Braid'],
      ['Appearance','Transparent ice crystal gradient connector shell and braided jacket shown'],
      ['Compatibility cue','iPhone 16 and USB-C smartphone compatibility shown in supplied image; exact device compatibility requires sample validation']
    ],
    packagingClaims:[
      ['Price: 100-1000 pieces','US$0.60 / piece'],
      ['Price: 1000+ pieces','US$0.56 / piece'],
      ['Customization','Customization supported'],
      ['Custom packaging','Packaging customization supported'],
      ['Lead time','Not provided in supplied material; confirm by current quotation'],
      ['Packaging evidence','Confirm box type, artwork, barcode, label and carton data before order']
    ] },
  { model:'YBD 1m 60W Dual Type-C PD Fast Charging Cable', slug:'/products/usb-cables/factory-direct-60w-dual-type-c-cable/', family:'USB Cable', interface:'Dual Type-C / USB-C to USB-C cable for cell phones', power:'60W PD listed in title; added supplier image states 20V 3A input, requiring exact SKU confirmation', dataRate:'USB 3.0, USB 3.1 and USB 3.2 connector wording listed; data behavior requires model confirmation', video:'Not positioned for display output', material:'TPE jacket, pure copper conductor and braid shielding listed', lengths:'1 m listed in title; image also shows 1 m / 1.5 m / 2 m options', bestFor:'Cell-phone, USB-C mobile-device, ecommerce, wholesale and private-label programs that need a factory-direct braided dual Type-C fast charging cable', customization:['MOQ 100 pcs','100-1000 pcs: US$0.30 / piece','1000+ pcs: US$0.28 / piece','Custom logo on product supported','Customization supported','Packaging by project','Length options by quotation'], proofStatus:'User-provided title, parameter screenshot and product images captured; exact 60W/3A profile, connector version, length options, logo artwork, packaging and compliance require selected-model evidence', detailReady:true, cardLabel:'60W dual Type-C cable', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'100-1000 pcs',value:'US$0.30 / piece'},{label:'1000+ pcs',value:'US$0.28 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/factory-direct-60w-dual-type-c-cable/01-product-pack.webp',alt:'White dual Type-C fast charging cable coiled in a simple retail holder on a wood surface',label:'Product and pack'},
      {src:'/images/products/factory-direct-60w-dual-type-c-cable/02-dual-type-c-spec.webp',alt:'Dual Type-C cable supplier image showing TPE, 120 strands of copper, OD3.7 and 60W fast charging cues',label:'Dual Type-C spec cues'},
      {src:'/images/products/factory-direct-60w-dual-type-c-cable/03-phone-charging.webp',alt:'White Type-C cable connected to a cell phone with low-temperature safe fast charging cue',label:'Phone charging use'},
      {src:'/images/products/factory-direct-60w-dual-type-c-cable/04-3a-speed.webp',alt:'Dual Type-C cable charging speed image showing 55 percent in 30 minutes with 20V 3A input for 60W fast charging',label:'3A charging speed'}
    ],
    featureHighlights:[
      {title:'Fast charging',value:'60W / 3A listed',note:'Title lists 60W PD, and the added supplier image states 20V 3A input; confirm exact charging profile before quotation.',image:'/images/products/factory-direct-60w-dual-type-c-cable/04-3a-speed.webp',alt:'Dual Type-C cable charging speed image with 20V 3A input cue'},
      {title:'Construction',value:'TPE + copper',note:'TPE jacket, pure copper conductor and braid shielding are listed in the supplied parameter table.',image:'/images/products/factory-direct-60w-dual-type-c-cable/01-product-pack.webp',alt:'White dual Type-C cable product and packaging holder'},
      {title:'OEM sourcing',value:'Factory direct',note:'Product logo, customization, packaging, brand and length options should be reviewed by project.',image:'/images/products/factory-direct-60w-dual-type-c-cable/03-phone-charging.webp',alt:'White Type-C cable connected to a cell phone'}
    ],
    sourceSnapshot:'User-provided product title, parameter screenshot and images reviewed 2 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','Factory Direct 1m 60W Dual Type-C PD Fast Charging Cable with Braid Shielding TPE Jacket Pure Copper Conductor for Cell Phones'],
      ['Product format','Dual Type-C / USB-C to USB-C fast charging cable'],
      ['USB type','Standard'],
      ['Function','3A Fast Charging'],
      ['Power','60W PD listed in title and product image'],
      ['Material','TPE'],
      ['Conductor','Pure Copper'],
      ['Shielding','Braid'],
      ['Jacket','TPE'],
      ['Connectors','USB 3.0 Connector, USB 3.2 connector, USB 3.1 connector, Type-C'],
      ['Use','mobile phone'],
      ['Private mold','Yes'],
      ['Brand Name','OEM'],
      ['Model number','NO'],
      ['Type','Fast charging cable, Flat Cable, type-c usb cable'],
      ['Length cue','1 m listed in title; 1 m / 1.5 m / 2 m shown in image'],
      ['Place of origin','Guangdong, China']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['Price: 100-1000 pcs','US$0.30 / piece'],
      ['Price: 1000+ pcs','US$0.28 / piece'],
      ['Logo support','Custom logo on product supported'],
      ['Customization','Customization supported'],
      ['OEM support','Brand Name listed as OEM'],
      ['Packaging','Packaging by project; confirm package style, artwork, barcode and carton data'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'1M High Quality USB to L 2A Fast Charging USB Cable for iPhone 14 13 12 11 10 8 7 6 Pro Max XS XR', slug:'/products/usb-cables/1m-usb-to-l-2a-fast-charging-iphone-cable/', family:'USB Cable', interface:'USB-A to Lightning-style / L connector for iPhone models listed by user; exact connector authorization and compatibility require confirmation', power:'2A fast charging listed; supplier image also shows 20W cue requiring selected-SKU confirmation', dataRate:'Charging cable positioning; data-transfer rate not provided in supplied material', video:'Not positioned for display output', material:'TPE jacket, pure copper conductor and braid shielding listed', lengths:'1 m requested; images also show 1 m / 1.5 m / 2 m options', bestFor:'Wholesale iPhone charging-cable programs that need low MOQ, custom logo, custom packaging and bulk carton supply review', customization:['MOQ 100 pcs','100 pcs: US$0.29 / piece','1000+ pcs: US$0.27 / piece','Custom logo supported','Custom packaging supported','Length options by quotation'], proofStatus:'User-provided title, parameter screenshot, price terms and product images captured; exact connector, compatibility, 2A/20W profile, MFi/licensing status, logo, packaging and compliance require selected-model evidence', detailReady:true, cardLabel:'USB to L iPhone cable', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'100 pcs',value:'US$0.29 / piece'},{label:'1000+ pcs',value:'US$0.27 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/1m-usb-to-l-2a-iphone-cable/01-main.webp',alt:'White USB-A to Lightning-style iPhone charging cable coiled on a white background',label:'Product view'},
      {src:'/images/products/1m-usb-to-l-2a-iphone-cable/02-spec.webp',alt:'Supplier image showing USB to L iPhone cable with 20W, OD2.9 and 1m 1.5m 2m cues',label:'Listed spec cues'},
      {src:'/images/products/1m-usb-to-l-2a-iphone-cable/03-packaged.webp',alt:'Packaged white USB fast charging cables with fully compatible no pop-ups supplier cue',label:'Packaged cable view'},
      {src:'/images/products/1m-usb-to-l-2a-iphone-cable/04-phone-use.webp',alt:'Close-up USB-A to Lightning-style cable near an iPhone with 20W TPE material cue',label:'Phone-use image'},
      {src:'/images/products/1m-usb-to-l-2a-iphone-cable/05-carton.webp',alt:'Bulk carton of individually bundled white iPhone charging cables in clear packaging',label:'Bulk carton'},
      {src:'/images/products/1m-usb-to-l-2a-iphone-cable/06-parameters.webp',alt:'User-provided parameter table for USB to L 2A fast charging cable',label:'Parameter table'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 100 pcs',note:'User supplied MOQ and price tiers are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/1m-usb-to-l-2a-iphone-cable/05-carton.webp',alt:'Bulk carton of bundled white charging cables'},
      {title:'Charging',value:'2A listed',note:'The request lists 2A fast charging while one image shows a 20W cue; confirm the exact charging profile and device behavior by sample.',image:'/images/products/1m-usb-to-l-2a-iphone-cable/02-spec.webp',alt:'Supplier image with 20W and OD2.9 cues'},
      {title:'OEM packaging',value:'Logo + packaging',note:'Custom logo and custom packaging are supported by project; artwork, placement, box style and carton mark need approval.',image:'/images/products/1m-usb-to-l-2a-iphone-cable/03-packaged.webp',alt:'Packaged white USB fast charging cables'}
    ],
    sourceSnapshot:'User-provided product title, parameter screenshot, commercial terms and images reviewed 3 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','1M High Quality USB to L 2A Fast Charging USB Cable for iPhone 14 13 12 11 10 8 7 6 Pro Max XS XR'],
      ['Product format','USB-A to Lightning-style / L fast charging cable'],
      ['USB type','Standard'],
      ['Function','2A fast charging listed by user; 20W shown in supplied image'],
      ['Material','TPE'],
      ['Conductor','Pure Copper'],
      ['Shielding','Braid'],
      ['Jacket','TPE'],
      ['Connectors','USB 3.0 Connector, USB 3.2 connector, USB 3.1 connector, Type C listed in screenshot; product images show USB-A to Lightning-style / L connector, requiring SKU confirmation'],
      ['Use','mobile phone'],
      ['Private mold','Yes'],
      ['Brand Name','OEM'],
      ['Model number','NO'],
      ['Type','Fast charging cable, Flat Cable, type-c usb cable'],
      ['Length cue','1 m requested; 1 m / 1.5 m / 2 m shown in supplied image'],
      ['Outer diameter cue','OD2.9 shown in supplied image'],
      ['Compatibility cue','iPhone 14 / 13 / 12 / 11 / 10 / 8 / 7 / 6 / Pro Max / XS / XR listed by user; sample validation and licensing status required'],
      ['Place of origin','Guangdong, China']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['Price: 100 pcs','US$0.29 / piece'],
      ['Price: 1000+ pcs','US$0.27 / piece'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Custom packaging supported'],
      ['Customization','Customization supported'],
      ['Packaging evidence','Bulk carton and bundled cable packaging shown in supplied images; confirm final bag, box, barcode and carton mark'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'Fast Charge Type C to Type C Cable 1M 5A PD for Samsung for Galaxy S21 S22 Ultra Note 10 20 for Huawei Cameras', slug:'/products/usb-cables/1m-5a-pd-type-c-to-type-c-cable/', family:'USB Cable', interface:'Type-C to Type-C cable for Samsung Galaxy, Huawei and camera charging programs listed by user; exact device compatibility requires sample confirmation', power:'5A PD fast charging listed; exact wattage profile requires selected-SKU confirmation', dataRate:'Charging cable positioning; data-transfer rate not provided in supplied material', video:'Not positioned for display output', material:'Material not stated in supplied text; images show black and white molded Type-C cable variants with paper sleeve packaging', lengths:'1 m requested', bestFor:'Wholesale USB-C mobile-device and camera charging-cable programs that need 100-piece MOQ, low unit price, logo marking and custom packaging review', customization:['MOQ 100 pcs','100-1000 pcs: US$0.28 / piece','1000+ pcs: US$0.25 / piece','Custom logo supported','Custom packaging supported','Black and white image variants require quotation confirmation'], proofStatus:'User-provided title, price terms and product images captured; exact PD profile, 5A behavior, material, conductor, compatibility, color, logo, packaging and compliance require selected-model evidence', detailReady:true, cardLabel:'1m 5A PD Type-C cable', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'100-1000 pcs',value:'US$0.28 / piece'},{label:'1000+ pcs',value:'US$0.25 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/1m-5a-pd-type-c-to-type-c-cable/01-black-packaged.webp',alt:'Black Type-C to Type-C charging cables coiled with black paper sleeves in a carton',label:'Black packaged cables'},
      {src:'/images/products/1m-5a-pd-type-c-to-type-c-cable/02-white-bulk-close.webp',alt:'White Type-C to Type-C charging cables packed in bulk with paper sleeves and clear bags',label:'White bulk close-up'},
      {src:'/images/products/1m-5a-pd-type-c-to-type-c-cable/03-white-bulk-wide.webp',alt:'Wide view of white Type-C to Type-C charging cables in clear bags and paper sleeves',label:'White bulk carton'},
      {src:'/images/products/1m-5a-pd-type-c-to-type-c-cable/04-connector-detail.webp',alt:'Close-up of black Type-C to Type-C cable connectors with carton packaging in the background',label:'Connector detail'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 100 pcs',note:'User supplied MOQ and price tiers are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/1m-5a-pd-type-c-to-type-c-cable/03-white-bulk-wide.webp',alt:'White Type-C to Type-C cables packed in bulk'},
      {title:'Charging',value:'5A PD listed',note:'The request lists 5A PD fast charging; confirm cable construction, charger/device pairing and actual charging profile by sample.',image:'/images/products/1m-5a-pd-type-c-to-type-c-cable/04-connector-detail.webp',alt:'Black Type-C connector detail'},
      {title:'OEM packaging',value:'Logo + packaging',note:'Custom logo and custom packaging are supported by project; artwork, sleeve design, bag, barcode and carton mark need approval.',image:'/images/products/1m-5a-pd-type-c-to-type-c-cable/01-black-packaged.webp',alt:'Black Type-C cables with paper sleeve packaging'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 4 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','Fast Charge Type C to Type C Cable 1M 5A PD for Samsung for Galaxy S21 S22 Ultra Note 10 20 for Huawei Cameras'],
      ['Product format','Type-C to Type-C fast charging cable'],
      ['Function','5A PD fast charging listed by user'],
      ['Length','1 m requested'],
      ['Compatibility cue','Samsung Galaxy S21 / S22 Ultra / Note 10 / Note 20, Huawei and cameras listed by user; exact device compatibility requires sample validation'],
      ['Color cue','Black and white variants shown in supplied images'],
      ['Packaging cue','Paper sleeve, clear bag and carton bulk packaging shown in supplied images'],
      ['Connector cue','USB-C / Type-C male-to-male connector shown in supplied images'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Custom packaging supported'],
      ['Material','Not provided in supplied text; confirm jacket, shell and conductor before quotation'],
      ['Place of origin','Not provided in supplied material']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['Price: 100-1000 pcs','US$0.28 / piece'],
      ['Price: 1000+ pcs','US$0.25 / piece'],
      ['Logo support','Custom logo supported'],
      ['Custom packaging','Custom packaging supported'],
      ['Packaging evidence','Paper sleeve, clear bag and carton packing shown in supplied images; confirm final artwork, label and carton data'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
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
  { model:'HDMI to VGA Video Adapter Converter Full HD 1080P Plug and Play for Laptop Computer Monitor Projector Wholesale Factory', slug:'/products/hdmi-cables/hdmi-to-vga-1080p-adapter/', family:'HDMI Cable', interface:'HDMI male input to VGA female output adapter for laptop, computer, monitor and projector sourcing programs', power:'Not positioned as a charging product; active conversion and any auxiliary power requirement require selected-SKU confirmation', dataRate:'HDMI-to-VGA video conversion listed; exact chipset, compatibility and signal behavior require sample evidence', video:'Full HD 1080P and 1080P@60Hz wording shown in supplied title/images; source, display, cable and resolution behavior require test evidence', material:'Black and white adapter color variants shown; supplied image lists ground wire, tinned copper, aluminum foil and aluminum-magnesium woven mesh shielding; exact internal construction requires source confirmation', lengths:'Short adapter pigtail shown; exact cable length requires selected-SKU confirmation', bestFor:'Wholesale HDMI-to-VGA adapter programs for laptops, computers, monitors, projectors, retail packs and custom-logo sourcing', customization:['MOQ 500 pcs','US$0.68 / piece','Customization supported','Custom logo supported','Black and white image variants require quotation confirmation','Packaging and artwork details by project'], proofStatus:'User-provided title, commercial terms and product images captured; exact 1080P/60Hz behavior, plug-and-play compatibility, conversion direction, shielding stack, color, logo marking, packaging and compliance scope require selected-model evidence', detailReady:true, cardLabel:'HDMI to VGA 1080P', cardFacts:[{label:'MOQ',value:'500 pcs'},{label:'Price',value:'US$0.68 / piece'},{label:'Logo',value:'Supported'}],
    images:[
      {src:'/images/products/hdmi-to-vga-1080p-adapter/01-main.webp',alt:'Black HDMI to VGA adapter converter with HDMI male cable and VGA female port',label:'Product view'},
      {src:'/images/products/hdmi-to-vga-1080p-adapter/03-packaging.webp',alt:'Black and white HDMI to VGA adapters in retail hanging bag packaging',label:'Packaging view'},
      {src:'/images/products/hdmi-to-vga-1080p-adapter/04-1080p-vision.webp',alt:'Supplier image showing 1080P HD vision cue for HDMI to VGA video adapter',label:'1080P video cue'},
      {src:'/images/products/hdmi-to-vga-1080p-adapter/02-shielding.webp',alt:'Supplier image showing multi-layer shielding structure for sharper image quality',label:'Shielding cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 500 pcs',note:'User supplied MOQ and unit price are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/hdmi-to-vga-1080p-adapter/03-packaging.webp',alt:'HDMI to VGA adapter retail packaging view'},
      {title:'Video output',value:'1080P listed',note:'The supplied title and image list Full HD 1080P and 1080P@60Hz cues; confirm source device, monitor, projector and mode by sample.',image:'/images/products/hdmi-to-vga-1080p-adapter/04-1080p-vision.webp',alt:'1080P HD vision supplier image'},
      {title:'Construction cue',value:'Multi-layer shielding listed',note:'Supplied image lists ground wire, tinned copper, aluminum foil and aluminum-magnesium woven mesh; construction evidence is required before publication.',image:'/images/products/hdmi-to-vga-1080p-adapter/02-shielding.webp',alt:'Multi-layer shielding supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 9 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','HDMI to VGA Video Adapter Converter Full HD 1080P Plug and Play for Laptop Computer Monitor Projector Wholesale Factory'],
      ['Product format','HDMI to VGA video adapter converter'],
      ['Connector format','HDMI male input cable to VGA female output port shown in supplied images'],
      ['Video cue','Full HD 1080P listed by user; 1080P@60Hz HD video signal transmission shown in supplied image'],
      ['Use','Laptop, computer, monitor and projector listed by user'],
      ['Plug-and-play cue','Plug and Play wording listed by user; host/display compatibility requires sample confirmation'],
      ['Color cue','Black adapter shown in main image; black and white packaged variants shown in supplied packaging image'],
      ['Construction cue','Ground wire, tinned copper, aluminum foil and aluminum-magnesium woven mesh listed in supplied shielding image'],
      ['Image quality cue','Multi-layer shielding for sharper image quality shown in supplied image; test evidence pending'],
      ['Customization','Customization supported by user request; final scope by quotation'],
      ['Logo support','Custom logo supported by user request'],
      ['Certification cue','CE/FCC-style marks visible on product image; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','500 pcs'],
      ['Price','US$0.68 / piece'],
      ['Logo support','Custom logo supported'],
      ['Customization','Supported; confirm logo position, marking method, color, package artwork, barcode and carton mark by project'],
      ['Packaging cue','Retail hanging bag packaging shown in supplied image; final packaging by quotation'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'1080P Full HD Wii to HDMI-Compatible Adapter Converter Wii2 HDMI-Compatible Converter 3.5mm Audio for PC HDTV Monitor Display', slug:'/products/hdmi-cables/wii-to-hdmi-1080p-adapter/', family:'HDMI Cable', interface:'Wii AV output input to HDMI-compatible output adapter with 3.5 mm audio output shown in supplied images', power:'Not positioned as a charging product; any auxiliary power or chipset requirement requires selected-SKU confirmation', dataRate:'HDMI-compatible video conversion listed; exact chipset, compatibility and signal behavior require sample evidence', video:'1080P Full HD and HDMI-compatible output wording listed; source console, display mode and scaling behavior require test evidence', material:'White housing shown in main images; black and white color variants shown; exact shell material requires source confirmation', lengths:'Compact adapter format shown; cable not included unless confirmed by selected package', bestFor:'Wholesale Wii-to-HDMI adapter programs for PC, HDTV, monitor, display and retro console accessory sourcing', customization:['MOQ 100 pcs','1 piece/sample tier: US$1.60 / piece','100-100 pieces: US$1.50 / piece as supplied; tier wording requires confirmation','1000+ pcs: US$1.38 / piece','Color, packaging and marking requirements by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact 1080P behavior, HDMI-compatible output, 3.5 mm audio output, Wii compatibility, chip sourcing, packaging, price tiers and compliance scope require selected-model evidence', detailReady:true, cardLabel:'Wii to HDMI 1080P', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'Price',value:'US$1.60 / piece'},{label:'100-100 pcs',value:'US$1.50 / piece'},{label:'1000+ pcs',value:'US$1.38 / piece'}],
    images:[
      {src:'/images/products/wii-to-hdmi-1080p-adapter/01-main.webp',alt:'White Wii2HDMI 1080P adapter converter product view',label:'Product view'},
      {src:'/images/products/wii-to-hdmi-1080p-adapter/02-connection-diagram.webp',alt:'Wii to HDMI adapter connection diagram with Wii input HDMI output and 3.5 mm audio',label:'Connection diagram'},
      {src:'/images/products/wii-to-hdmi-1080p-adapter/03-port-detail.webp',alt:'Wii2HDMI adapter port detail showing audio out HDMI output and Wii input',label:'Port detail'},
      {src:'/images/products/wii-to-hdmi-1080p-adapter/04-color-variants.webp',alt:'Black and white Wii2HDMI 1080P adapter color variants',label:'Color variants'},
      {src:'/images/products/wii-to-hdmi-1080p-adapter/05-tv-audio-use.webp',alt:'Wii2HDMI adapter connected to TV and speakers with HDMI and 3.5 mm audio cables',label:'Use scenario'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 100 pcs',note:'User supplied MOQ and tier prices are shown for RFQ preparation; the 100-100 pcs tier wording should be reconfirmed before quotation.',image:'/images/products/wii-to-hdmi-1080p-adapter/04-color-variants.webp',alt:'Black and white Wii2HDMI adapter color variants'},
      {title:'Connection format',value:'Wii in / HDMI out / 3.5 mm audio',note:'Supplied images show Wii input plus HDMI-compatible output and audio output; confirm selected console, display and audio device compatibility by sample.',image:'/images/products/wii-to-hdmi-1080p-adapter/02-connection-diagram.webp',alt:'Wii to HDMI adapter connection diagram'},
      {title:'Display cue',value:'1080P Full HD listed',note:'1080P wording is reproduced from the supplied title and images; real output depends on console source mode, display and adapter chipset.',image:'/images/products/wii-to-hdmi-1080p-adapter/05-tv-audio-use.webp',alt:'Wii2HDMI adapter use scenario with TV and audio devices'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 10 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','1080P Full HD Wii to HDMI-Compatible Adapter Converter Wii2 HDMI-Compatible Converter 3.5mm Audio for PC HDTV Monitor Display'],
      ['Product format','Compact Wii-to-HDMI-compatible adapter converter'],
      ['Input cue','Wii input shown in supplied connection and port-detail images'],
      ['Output cue','HDMI-compatible output and 3.5 mm audio output shown in supplied images'],
      ['Video cue','1080P Full HD listed by user and shown on supplied product images'],
      ['Use','PC, HDTV, monitor and display listed by user; Wii, TV, monitor, speaker and headphone use shown in supplied images'],
      ['Compatibility cue','Supplied image references Wii, Wii mini and original Wii compatibility; selected-model evidence pending'],
      ['Color cue','White main unit shown; black and white variants shown in supplied image'],
      ['Chip cue','Supplier image mentions chip compatibility; exact chipset and sourcing evidence pending'],
      ['Certification','Not provided in supplied material; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['Price','US$1.60 / piece'],
      ['Supplied tier','100-100 pieces: US$1.50 / piece - wording requires confirmation'],
      ['1000+ tier','US$1.38 / piece'],
      ['Customization','Not specified in the supplied request; confirm color, marking, packaging, barcode and carton mark by quotation if required'],
      ['Packaging cue','Retail package not provided in supplied material; final packing method requires quotation confirmation'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'Ultra Clear 8K hdmi Cable 48Gbps 4K 240Hz 8K 60Hz Audio Video Transfer V2.1 hdmi Cable for HDTV Projector Monitor 3D Visual', slug:'/products/hdmi-cables/ultra-clear-8k-hdmi-2-1-cable/', family:'HDMI Cable', interface:'HDMI male-to-male cable format shown for HDTV, projector, monitor and 3D visual display programs', power:'Not applicable', dataRate:'HDMI 2.1 / 48Gbps listed; exact bandwidth behavior requires selected-SKU and test evidence', video:'8K 60Hz, 4K 240Hz, 4K 120Hz and 3D visual cues listed; source, display, cable length and mode require test evidence', material:'Black cable with gray metal-look connector housings shown; exact conductor, jacket and shielding stack require confirmation', lengths:'1 m / 1.5 m / 2 m / 3 m / 5 m listed', bestFor:'HDTV, projector, monitor, gaming, 3D visual and private-label HDMI 2.1 cable sourcing programs', customization:['MOQ 100 pcs','1 m: US$0.90 / piece','1.5 m: US$1.15 / piece','2 m: US$1.35 / piece','3 m: US$1.70 / piece','5 m: US$2.30 / piece','Logo, length, packaging and label requirements by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact HDMI 2.1, 48Gbps, 4K 240Hz, 8K 60Hz, 3D visual behavior, construction and compliance scope require selected-model evidence', detailReady:true, cardLabel:'8K HDMI 2.1 cable', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'1 m',value:'US$0.90 / piece'},{label:'2 m',value:'US$1.35 / piece'},{label:'5 m',value:'US$2.30 / piece'}],
    images:[
      {src:'/images/products/ultra-clear-8k-hdmi-2-1-cable/01-main.webp',alt:'Ultra Clear 8K HDMI cable with gray connector housings and black cable',label:'Product view'},
      {src:'/images/products/ultra-clear-8k-hdmi-2-1-cable/02-3d-vision.webp',alt:'Supplier image showing HDMI cable 3D vision display use',label:'3D vision cue'},
      {src:'/images/products/ultra-clear-8k-hdmi-2-1-cable/03-large-screen.webp',alt:'Supplier image showing HDMI cable connected from laptop to a large TV screen',label:'Large screen use'},
      {src:'/images/products/ultra-clear-8k-hdmi-2-1-cable/04-resolution-refresh.webp',alt:'Supplier image listing HDMI 2.1 48Gbps 8K 60Hz and 4K 120Hz cues',label:'Resolution and refresh cues'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 100 pcs',note:'User supplied length pricing is recorded for RFQ preparation; final quotation should confirm active SKU, package and order date.',image:'/images/products/ultra-clear-8k-hdmi-2-1-cable/01-main.webp',alt:'Ultra Clear 8K HDMI cable product view'},
      {title:'Display cues',value:'48Gbps / 8K60 listed',note:'Bandwidth, resolution and refresh wording is reproduced from supplied material; sample testing is required before public claim use.',image:'/images/products/ultra-clear-8k-hdmi-2-1-cable/04-resolution-refresh.webp',alt:'HDMI 2.1 resolution and refresh supplier image'},
      {title:'Application',value:'HDTV / projector / monitor',note:'Supplied images show large-screen and 3D visual use cases; confirm source device, display mode and cable length in the RFQ.',image:'/images/products/ultra-clear-8k-hdmi-2-1-cable/03-large-screen.webp',alt:'HDMI cable connected to a large screen'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 10 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','Ultra Clear 8K hdmi Cable 48Gbps 4K 240Hz 8K 60Hz Audio Video Transfer V2.1 hdmi Cable for HDTV Projector Monitor 3D Visual'],
      ['Product format','HDMI male-to-male cable shown in supplied main image'],
      ['Protocol / bandwidth cue','HDMI 2.1 and 48Gbps listed by user and shown in supplied image; test evidence pending'],
      ['Resolution / refresh cue','8K 60Hz, 4K 240Hz and 4K 120Hz cues listed; selected length, source and display evidence pending'],
      ['3D visual cue','3D stereoscopic imaging support shown in supplied image; display/source compatibility requires confirmation'],
      ['Use','HDTV, projector and monitor listed by user; large-screen connection shown in supplied image'],
      ['Length options','1 m, 1.5 m, 2 m, 3 m and 5 m listed by user'],
      ['Color cue','Black cable with gray metal-look connector housings shown'],
      ['Certification','Not provided in supplied material; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['1 m price','US$0.90 / piece'],
      ['1.5 m price','US$1.15 / piece'],
      ['2 m price','US$1.35 / piece'],
      ['3 m price','US$1.70 / piece'],
      ['5 m price','US$2.30 / piece'],
      ['Customization','Not specified in the supplied request; confirm logo, label, color, package artwork, barcode and carton mark by quotation if required'],
      ['Packaging cue','Retail package not provided in supplied material; final packing method requires quotation confirmation'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'4k HDMI V2.0 Cable High Speed HDMI Cable Support 3D 4K High Quality Cable for Laptop Projector Monitor', slug:'/products/hdmi-cables/4k-hdmi-v2-0-cable/', family:'HDMI Cable', interface:'HDMI male-to-male cable for laptop, projector, monitor, PC host, set-top box and game console sourcing programs', power:'Not positioned as a charging product', dataRate:'High Speed HDMI and HDMI V2.0 wording listed; exact bandwidth and compliance require selected-SKU test evidence', video:'4K, 4K x 2K, 3840 x 2160 and 3D support are listed; resolution, refresh rate, cable length and source/display behavior require sample evidence', material:'Blue metal-style connector shell and black cable jacket shown; exact conductor, shielding and jacket construction require source confirmation', lengths:'1 m / 1.5 m / 2 m / 3 m / 5 m / 10 m / 15 m / 20 m / 25 m / 30 m listed', bestFor:'Wholesale HDMI V2.0 cable programs for laptops, projectors, monitors, PC hosts, set-top boxes and display accessory ranges', customization:['MOQ 100 pcs','1 m: US$0.60 / piece','1.5 m: US$0.70 / piece','2 m: US$0.80 / piece','3 m: US$1.00 / piece','5 m: US$1.20 / piece','10 m: US$2.30 / piece','15 m: US$3.50 / piece','20 m: US$4.50 / piece','25 m: US$5.60 / piece','30 m: US$6.80 / piece'], proofStatus:'User-provided title, commercial terms and product images captured; exact HDMI 2.0 compliance, 3D support, 4K behavior by length, audio/video sync, material, shielding, packaging, pricing and certification scope require selected-model evidence', detailReady:true, cardLabel:'4K HDMI V2.0 cable', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'1 m',value:'US$0.60 / piece'},{label:'5 m',value:'US$1.20 / piece'},{label:'30 m',value:'US$6.80 / piece'}],
    images:[
      {src:'/images/products/4k-hdmi-v2-0-cable/01-main.webp',alt:'Blue HDMI V2.0 4K cable with two male HDMI connectors',label:'Product view'},
      {src:'/images/products/4k-hdmi-v2-0-cable/02-device-compatibility.webp',alt:'Supplier image showing HDMI interface device compatibility for PC laptop set-top box game console TV monitor and projector',label:'Device compatibility'},
      {src:'/images/products/4k-hdmi-v2-0-cable/03-projector-use.webp',alt:'Supplier image showing HDMI cable linked from notebook to projector',label:'Projector use'},
      {src:'/images/products/4k-hdmi-v2-0-cable/04-4k-picture-quality.webp',alt:'Supplier image showing 4K picture quality cue for HDMI V2.0 cable',label:'4K picture cue'},
      {src:'/images/products/4k-hdmi-v2-0-cable/05-audio-video-sync.webp',alt:'Supplier image showing audio and video synchronous transmission cue for HDMI cable',label:'Audio video cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 100 pcs',note:'User supplied MOQ and length-based price tiers are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/4k-hdmi-v2-0-cable/01-main.webp',alt:'Blue HDMI V2.0 4K cable product view'},
      {title:'Display cue',value:'4K / 3D listed',note:'4K, 4K x 2K, 3840 x 2160 and 3D wording are reproduced from supplied material; exact mode support depends on source, display and cable length.',image:'/images/products/4k-hdmi-v2-0-cable/04-4k-picture-quality.webp',alt:'4K picture quality supplier image'},
      {title:'Application cue',value:'Laptop / projector / monitor',note:'Supplied images show PC, laptop, projector, TV and monitor scenarios; confirm the final source-device and display target before quotation.',image:'/images/products/4k-hdmi-v2-0-cable/03-projector-use.webp',alt:'Notebook connected to projector through HDMI cable'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 10 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','4k HDMI V2.0 Cable High Speed HDMI Cable Support 3D 4K High Quality Cable for Laptop Projector Monitor'],
      ['Product format','HDMI male-to-male cable'],
      ['Version cue','HDMI V2.0 / 2.0V wording shown in supplied title and images'],
      ['Video cue','4K, 4K x 2K, 3840 x 2160 and 3D support listed; selected-length evidence pending'],
      ['Audio/video cue','Supplier image lists synchronous audio and video transmission; test evidence pending'],
      ['Use','Laptop, projector and monitor listed by user; PC host, set-top box, game console, LCD TV and projector shown in supplied images'],
      ['Color cue','Blue connector shells and black cable jacket shown'],
      ['Length options','1 m, 1.5 m, 2 m, 3 m, 5 m, 10 m, 15 m, 20 m, 25 m and 30 m listed by user'],
      ['Certification','Not provided in supplied material; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['1 m','US$0.60 / piece'],
      ['1.5 m','US$0.70 / piece'],
      ['2 m','US$0.80 / piece'],
      ['3 m','US$1.00 / piece'],
      ['5 m','US$1.20 / piece'],
      ['10 m','US$2.30 / piece'],
      ['15 m','US$3.50 / piece'],
      ['20 m','US$4.50 / piece'],
      ['25 m','US$5.60 / piece'],
      ['30 m','US$6.80 / piece'],
      ['Customization','Not specified in the supplied request; confirm logo, packaging, barcode and carton mark by quotation if required'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'OEM/ODM UHD 8K 60Hz 4K 144Hz Type-C USB-C to DP Cable Male to Male Cable with Aluminum Alloy Shell for Monitor Laptop', slug:'/products/hdmi-cables/usb-c-to-dp-8k-60hz-cable/', family:'HDMI Cable', interface:'USB-C male to DisplayPort male cable for monitor and laptop display programs', power:'Not positioned as a charging product', dataRate:'USB-C to DP screen-projection cable listed; exact DP Alt Mode, bandwidth and chipset behavior require selected-SKU evidence', video:'8K 60Hz, 4K 144Hz and 2K 165Hz cues are listed; source laptop, monitor, OS, GPU and cable length must be confirmed by sample evidence', material:'Aluminum-alloy shell listed by user; braided cable shown in supplied images; exact conductor and shielding stack require source confirmation', lengths:'Length not provided in supplied material; confirm selected length mix by quotation', bestFor:'OEM/ODM USB-C to DP cable sourcing programs for laptop-to-monitor screen projection, mirror mode and extend mode display setups', customization:['MOQ 100 pcs','100-500 pcs: US$2.48 / piece','500-1000 pcs: US$2.43 / piece','1000+ pcs: US$2.20 / piece','OEM/ODM listed; logo, packaging, length and artwork by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact 8K60, 4K144, 2K165, DP Alt Mode, material, shell, cable construction, OEM/ODM scope, pricing and certification claims require selected-model evidence', detailReady:true, cardLabel:'USB-C to DP 8K cable', cardFacts:[{label:'MOQ',value:'100 pcs'},{label:'100-500 pcs',value:'US$2.48 / piece'},{label:'500-1000 pcs',value:'US$2.43 / piece'},{label:'1000+ pcs',value:'US$2.20 / piece'}],
    images:[
      {src:'/images/products/usb-c-to-dp-8k-60hz-cable/01-main.webp',alt:'USB-C to DisplayPort cable with braided cable and 8K 60Hz 4K 144Hz display cues',label:'Product view'},
      {src:'/images/products/usb-c-to-dp-8k-60hz-cable/02-connector-closeup.webp',alt:'Close-up of USB-C to DisplayPort cable connector shells with 8K UltraHD cue',label:'Connector close-up'},
      {src:'/images/products/usb-c-to-dp-8k-60hz-cable/03-display-use.webp',alt:'USB-C to DisplayPort cable connected from laptop to monitor with 8K 60Hz display cue',label:'Display use'},
      {src:'/images/products/usb-c-to-dp-8k-60hz-cable/04-mirror-extend-mode.webp',alt:'Supplier image showing mirror mode and extend mode for USB-C to DP cable',label:'Mirror and extend mode'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 100 pcs',note:'User supplied MOQ and tier prices are shown for RFQ preparation and should be reconfirmed before order.',image:'/images/products/usb-c-to-dp-8k-60hz-cable/01-main.webp',alt:'USB-C to DP 8K cable product view'},
      {title:'Display cue',value:'8K60 / 4K144 listed',note:'Resolution and refresh wording is reproduced from supplied material; confirm source laptop, monitor, OS, GPU and length before publication.',image:'/images/products/usb-c-to-dp-8k-60hz-cable/03-display-use.webp',alt:'USB-C to DP cable display use image'},
      {title:'Work modes',value:'Mirror / extend shown',note:'Supplied image shows mirror and extend mode use cases; final behavior depends on host USB-C DP Alt Mode and display configuration.',image:'/images/products/usb-c-to-dp-8k-60hz-cable/04-mirror-extend-mode.webp',alt:'Mirror and extend mode supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 11 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','OEM/ODM UHD 8K 60Hz 4K 144Hz Type-C USB-C to DP Cable Male to Male Cable with Aluminum Alloy Shell for Monitor Laptop'],
      ['Product format','USB-C male to DisplayPort male cable'],
      ['Display cue','8K 60Hz, 4K 144Hz and 2K 165Hz shown/listed in supplied title and images'],
      ['Use','Monitor and laptop listed by user; supplied images show laptop-to-monitor screen projection'],
      ['Mode cue','Mirror mode and extend mode shown in supplied image'],
      ['Material cue','Aluminum alloy shell listed by user; braided cable shown in supplied images'],
      ['Customization cue','OEM/ODM listed in title; final logo, package, label and length scope require quotation'],
      ['Certification','Not provided in supplied material; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','100 pcs'],
      ['100-500 pcs','US$2.48 / piece'],
      ['500-1000 pcs','US$2.43 / piece'],
      ['1000+ pcs','US$2.20 / piece'],
      ['Customization','OEM/ODM listed; confirm logo, packaging, barcode, length mix and carton mark by quotation'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'HDMI Cable Configuration', slug:'/products/hdmi-cables/hdmi-2-1-cable/', family:'HDMI Cable', interface:'Confirm connector by selected SKU', power:'Not applicable', dataRate:'Confirm by selected SKU', video:'Confirm requested display performance and evidence', material:'Confirm jacket by selected SKU', lengths:'Confirm construction and length', bestFor:'Display, projector and distribution programs', customization:['Logo','Color','Length','Packaging'], proofStatus:'Resolution and refresh claims require SKU test evidence', cardLabel:'HDMI configuration', cardFacts:[{label:'Connector',value:'Confirm selected SKU'},{label:'Display',value:'Define target mode'},{label:'Length',value:'Confirm installation'}], images:[{src:'/images/catalog/hdmi-cable-category.webp',alt:'Generic black braided HDMI male-to-male cable with both connector ends visible',label:'HDMI configuration reference'}] },
  { model:'Ultra Clear 8K DP Cable 8K 60Hz 4K 240Hz Audio Video Transfer V1.4 DP Cable for HDTV Projector Monitor 3D Visual Game', slug:'/products/displayport-cables/ultra-clear-8k-dp-1-4-cable/', family:'DisplayPort', interface:'DisplayPort male-to-male cable shown for HDTV, projector, monitor, 3D visual and gaming display programs', power:'Not applicable', dataRate:'DP 1.4 listed; exact bandwidth and link mode require selected-SKU evidence', video:'8K 60Hz, 4K 240Hz, HDR and 3D visual cues listed; source, display, GPU, cable length and mode require test evidence', material:'Black cable with gray metal-look connector housings shown; exact conductor, jacket and shielding stack require confirmation', lengths:'1 m / 1.5 m / 2 m / 3 m / 5 m listed', bestFor:'HDTV, projector, monitor, game display, 3D visual and private-label DP 1.4 cable sourcing programs', customization:['MOQ 200 pcs','1 m: US$0.95 / piece','1.5 m: US$1.20 / piece','2 m: US$1.38 / piece','3 m: US$1.70 / piece','5 m: US$2.20 / piece','Logo, length, packaging and label requirements by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact DP 1.4, 8K60, 4K240, HDR, 3D visual behavior, construction and compliance scope require selected-model evidence', detailReady:true, cardLabel:'8K DP 1.4 cable', cardFacts:[{label:'MOQ',value:'200 pcs'},{label:'1 m',value:'US$0.95 / piece'},{label:'2 m',value:'US$1.38 / piece'},{label:'5 m',value:'US$2.20 / piece'}],
    images:[
      {src:'/images/products/ultra-clear-8k-dp-1-4-cable/02-main.webp',alt:'Ultra Clear 8K DP 1.4 cable with gray connector housings and gold DisplayPort connectors',label:'Product view'},
      {src:'/images/products/ultra-clear-8k-dp-1-4-cable/03-8k-4k.webp',alt:'Supplier image listing DP 1.4 8K 60Hz and 4K 240Hz display cues',label:'8K and 4K cues'},
      {src:'/images/products/ultra-clear-8k-dp-1-4-cable/01-hdr.webp',alt:'Supplier image showing HDR high dynamic picture comparison cue',label:'HDR cue'},
      {src:'/images/products/ultra-clear-8k-dp-1-4-cable/04-3d-visual.webp',alt:'Supplier image showing DP cable 3D visual effects immersive experience cue',label:'3D visual cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 200 pcs',note:'User supplied length pricing is recorded for RFQ preparation; final quotation should confirm active SKU, package and order date.',image:'/images/products/ultra-clear-8k-dp-1-4-cable/02-main.webp',alt:'Ultra Clear 8K DP 1.4 cable product view'},
      {title:'Display cues',value:'8K60 / 4K240 listed',note:'Resolution, refresh and DP 1.4 wording is reproduced from supplied material; sample testing is required before public claim use.',image:'/images/products/ultra-clear-8k-dp-1-4-cable/03-8k-4k.webp',alt:'DP 1.4 8K 60Hz and 4K 240Hz supplier image'},
      {title:'Visual modes',value:'HDR / 3D listed',note:'HDR and 3D visual effects are supplied-image cues; source, display and content compatibility must be confirmed.',image:'/images/products/ultra-clear-8k-dp-1-4-cable/04-3d-visual.webp',alt:'3D visual effects supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 12 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','Ultra Clear 8K DP Cable 8K 60Hz 4K 240Hz Audio Video Transfer V1.4 DP Cable for HDTV Projector Monitor 3D Visual Game'],
      ['Product format','DisplayPort male-to-male cable shown in supplied images'],
      ['Protocol cue','DP 1.4 / V1.4 listed by user and shown in supplied images; selected-SKU evidence pending'],
      ['Resolution / refresh cue','8K 60Hz and 4K 240Hz listed by user and shown in supplied image; source, display, cable length and mode evidence pending'],
      ['HDR cue','HDR high dynamic picture cue shown in supplied image; display/content compatibility evidence pending'],
      ['3D visual cue','3D stereoscopic imaging / immersive experience cue shown in supplied image; display/source compatibility requires confirmation'],
      ['Use','HDTV, projector, monitor, 3D visual and game listed by user'],
      ['Length options','1 m, 1.5 m, 2 m, 3 m and 5 m listed by user'],
      ['Color cue','Black cable with gray metal-look connector housings shown'],
      ['Certification','Not provided in supplied material; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','200 pcs'],
      ['1 m price','US$0.95 / piece'],
      ['1.5 m price','US$1.20 / piece'],
      ['2 m price','US$1.38 / piece'],
      ['3 m price','US$1.70 / piece'],
      ['5 m price','US$2.20 / piece'],
      ['Customization','Not specified in the supplied request; confirm logo, label, color, package artwork, barcode and carton mark by quotation if required'],
      ['Packaging cue','Retail package not provided in supplied material; final packing method requires quotation confirmation'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
  { model:'DP 2.1 to Type C Cable 16K 60Hz 8K 120Hz Bidirectional USB C to DP Video Cable Braided Nylon Cable for Laptop Phone Monitor', slug:'/products/displayport-cables/dp21-type-c-to-dp-16k-bidirectional-cable/', family:'DisplayPort', interface:'USB-C male to DisplayPort male bidirectional cable shown for laptop, phone and monitor display programs', power:'Not positioned as a charging product', dataRate:'DP 2.1 listed; exact bandwidth, DP Alt Mode and host/device behavior require selected-SKU evidence', video:'16K 60Hz and 8K 120Hz listed; source, display, GPU, OS, cable length and mode require test evidence', material:'Braided nylon cable and aluminum-alloy shell cues shown; exact conductor, shielding and material stack require confirmation', lengths:'2 m listed', bestFor:'Laptop, phone and monitor sourcing programs that need USB-C to DisplayPort / DisplayPort to USB-C bidirectional display cable options', customization:['MOQ 50 pcs','2 m length listed','1-1000 pcs: US$4.30 / piece','1000+ pcs: US$4.00 / piece','Logo and packaging scope by quotation'], proofStatus:'User-provided title, commercial terms and product images captured; exact DP 2.1, 16K60, 8K120, bidirectional transmission, material, packaging, certification and compatibility claims require selected-model evidence', detailReady:true, cardLabel:'USB-C to DP 16K', cardFacts:[{label:'MOQ',value:'50 pcs'},{label:'Length',value:'2 m'},{label:'1-1000 pcs',value:'US$4.30 / piece'},{label:'1000+ pcs',value:'US$4.00 / piece'}],
    images:[
      {src:'/images/products/dp21-type-c-to-dp-16k-bidirectional-cable/01-main.webp',alt:'DP 2.1 to Type-C bidirectional braided cable with 16K Ultra HD cue',label:'Product view'},
      {src:'/images/products/dp21-type-c-to-dp-16k-bidirectional-cable/02-bidirectional.webp',alt:'Supplier image showing Type-C to DP and DP to Type-C bidirectional transmission cue',label:'Bidirectional cue'},
      {src:'/images/products/dp21-type-c-to-dp-16k-bidirectional-cable/03-craftsmanship.webp',alt:'Supplier image showing DisplayPort connector craftsmanship and braided cable material cues',label:'Construction cue'},
      {src:'/images/products/dp21-type-c-to-dp-16k-bidirectional-cable/04-packaging.webp',alt:'Retail packaging mockup for Type-C DisplayPort bidirectional conversion cable with logo area',label:'Packaging cue'}
    ],
    featureHighlights:[
      {title:'Order terms',value:'MOQ 50 pcs',note:'User supplied 2 m length and tier prices are recorded for RFQ preparation; final quotation should confirm package and active SKU.',image:'/images/products/dp21-type-c-to-dp-16k-bidirectional-cable/04-packaging.webp',alt:'Retail packaging mockup for Type-C DisplayPort bidirectional cable'},
      {title:'Display cues',value:'16K60 / 8K120 listed',note:'Resolution and refresh wording is reproduced from supplied material; sample testing is required before public claim use.',image:'/images/products/dp21-type-c-to-dp-16k-bidirectional-cable/01-main.webp',alt:'DP 2.1 to Type-C cable with 16K cue'},
      {title:'Direction',value:'Two-way listed',note:'Supplied image says Type-C to DP and DP to Type-C bidirectional transmission; compatibility depends on host ports, display ports and supported modes.',image:'/images/products/dp21-type-c-to-dp-16k-bidirectional-cable/02-bidirectional.webp',alt:'Bidirectional transmission supplier image'}
    ],
    sourceSnapshot:'User-provided product title, commercial terms and images reviewed 11 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','DP 2.1 to Type C Cable 16K 60Hz 8K 120Hz Bidirectional USB C to DP Video Cable Braided Nylon Cable for Laptop Phone Monitor'],
      ['Product format','USB-C male to DisplayPort male cable shown in supplied images'],
      ['Direction cue','Type-C to DP and DP to Type-C bidirectional transmission shown in supplied image'],
      ['Protocol cue','DP 2.1 listed by user; selected-SKU evidence pending'],
      ['Resolution / refresh cue','16K 60Hz and 8K 120Hz listed by user; supplied packaging image also shows 8K 60Hz / 4K / 2K compatibility cues that require confirmation'],
      ['Use','Laptop, phone and monitor listed by user'],
      ['Length option','2 m listed by user'],
      ['Material cue','Braided nylon cable listed by user; aluminum-alloy shell and selected gold-plated plug shown in supplied image'],
      ['Packaging cue','Retail box mockup with YOUR LOGO area shown in supplied image; final artwork and compliance marks require confirmation'],
      ['Certification cue','CE, RoHS, UKCA, FCC-style and recycle marks appear on packaging image; document scope pending before publication']
    ],
    packagingClaims:[
      ['MOQ','50 pcs'],
      ['Length','2 m'],
      ['1-1000 pcs','US$4.30 / piece'],
      ['1000+ pcs','US$4.00 / piece'],
      ['Customization','Logo and packaging appear supported by supplied packaging mockup; confirm logo, artwork, barcode and carton mark by quotation'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
    ] },
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
  { model:'YBD-CX11 11-in-1 USB-C Hub 3.0 Multiport Adapter', slug:'/products/hubs-docking/jl-cx11-11-in-1-usb-c-hub/', family:'Hub & Dock', interface:'USB-C host docking station with listed USB 3.0, USB 2.0, HDMI, VGA, RJ45, SD, TF, AUX and Type-C/PD functions', power:'100W PD listed; pass-through output and host conditions require exact SKU confirmation', dataRate:'USB 3.0 interface type listed; USB port map lists 3.0*1 + 2.0*3; transfer performance requires confirmation', video:'4K@30Hz HDMI listed and VGA shown; display behavior requires host, monitor and mode confirmation', material:'Aluminum alloy / ABS + aluminum alloy listed', lengths:'Integrated short host cable shown; cable length requires confirmation', bestFor:'Laptop docking, office workstation, tablet productivity, reseller and private-label programs that need an 11-port USB-C adapter with HDMI, VGA, Ethernet, card reader and PD functions', customization:['Custom logo supported','OEM/ODM customization by project','Color box packaging listed','Exact port matrix locked before sample approval'], proofStatus:'User-provided title, commercial terms, parameter screenshot and product images captured; exact port count, PD behavior, HDMI/VGA display mode, RJ45 speed, OS compatibility, compliance scope, packaging and lead time require source evidence', detailReady:true, cardLabel:'11-in-1 USB-C hub', cardFacts:[{label:'50-100 pcs',value:'US$5.80 / piece'},{label:'100-500 pcs',value:'US$5.60 / piece'},{label:'500+ pcs',value:'US$5.50 / piece'},{label:'1000+ pcs',value:'US$5.30 / piece'}],
    images:[
      {src:'/images/products/jl-cx11-11-in-1-usb-c-hub/01-main.webp',alt:'YBD-CX11 11-in-1 USB-C hub with HDMI, VGA, RJ45, SD, TF, USB, AUX and Type-C connection cues',label:'Port overview'},
      {src:'/images/products/jl-cx11-11-in-1-usb-c-hub/02-port-layout.webp',alt:'11-in-1 USB-C hub connected to a laptop with labeled Ethernet, VGA, HDMI, SD, TF, AUX, USB-C, USB 3.0 and USB 2.0 ports',label:'11-in-1 port layout'},
      {src:'/images/products/jl-cx11-11-in-1-usb-c-hub/03-tablet-use.webp',alt:'YBD-CX11 USB-C hub connected to an iPad with keyboard and mouse for office use',label:'Tablet workstation use'},
      {src:'/images/products/jl-cx11-11-in-1-usb-c-hub/04-4k-hdmi.webp',alt:'YBD-CX11 USB-C hub connected from laptop to display with listed 4K UHD HDMI at 30Hz cue',label:'Listed 4K HDMI use'}
    ],
    featureHighlights:[
      {title:'Port matrix',value:'11-in-1 listed',note:'Confirm exact port count, simultaneous-use behavior and host compatibility before order.',image:'/images/products/jl-cx11-11-in-1-usb-c-hub/02-port-layout.webp',alt:'11-in-1 USB-C hub port layout with Ethernet, VGA, HDMI, card reader, USB and Type-C labels'},
      {title:'Display output',value:'4K@30Hz listed',note:'HDMI 4K@30Hz and VGA are listed or shown; source device, monitor and display mode require validation.',image:'/images/products/jl-cx11-11-in-1-usb-c-hub/04-4k-hdmi.webp',alt:'USB-C hub connected to a display with 4K UHD HDMI cue'},
      {title:'Customization',value:'Logo supported',note:'Custom logo and OEM/ODM requirements should be reviewed with artwork, order quantity and packaging before production.',image:'/images/products/jl-cx11-11-in-1-usb-c-hub/03-tablet-use.webp',alt:'USB-C hub in tablet workstation use case'}
    ],
    sourceSnapshot:'User-provided product title, parameter screenshot, commercial terms and images reviewed 2 Sep 2026. Values below reproduce supplied material and are not independent certification evidence.',
    supplierClaims:[
      ['Listing title','11 in 1 USB C Hub 3.0 Multiport Adapter 4K HDMI VGA Gigabit Ethernet 100W PD SD TF Card Reader Type-C Laptop Docking Station'],
      ['Model number','YBD-CX11'],
      ['Brand name','YBD'],
      ['Product format','11-in-1 USB-C hub / laptop docking station'],
      ['Ports','>= 10 listed in parameter screenshot; title states 11 in 1'],
      ['Interface type','USB 3.0'],
      ['USB port map','3.0*1 + 2.0*3'],
      ['Function','Data Transfer + Charging'],
      ['Power delivery','100W PD listed in title; exact pass-through behavior requires confirmation'],
      ['HDMI version','4K@30Hz listed'],
      ['Video ports','HDMI and VGA shown/listed'],
      ['RJ45 Gigabit Speed','100Mbps listed in screenshot despite title saying Gigabit Ethernet; resolve before publishing a gigabit claim'],
      ['Card reader','SD and TF card reader shown/listed'],
      ['Material','Aluminum Alloy; ABS + Aluminum alloy'],
      ['Color','Grey'],
      ['Products status','Stock'],
      ['Package','Color Box'],
      ['Place of origin','Guangdong, China'],
      ['Warranty','12 months'],
      ['Certification','RoHS; CE; FCC — model scope and documents pending']
    ],
    packagingClaims:[
      ['Price: 50-100 pieces','US$5.80 / piece'],
      ['Price: 100-500 pieces','US$5.60 / piece'],
      ['Price: 500+ pieces','US$5.50 / piece'],
      ['Price: 1000+ pieces','US$5.30 / piece'],
      ['Customization','Customization supported'],
      ['Logo customization','Logo can be added'],
      ['Packaging','Color box listed; confirm artwork, barcode and carton data before order'],
      ['Lead time','Not provided in supplied material; confirm by current quotation']
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
