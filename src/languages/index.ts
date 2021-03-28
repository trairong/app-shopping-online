const langTH = {
  TITLE: ["ค้นหา", "Search"],
  RecommendedProducts: ["สินค้าแนะนำ", "Recommended Products"],
};

export const Language = (lang: string) => {
  let SetLanguage: any = {};
  let indexTH = 0;
  let indexEN = 1;

  const Language = {
    Home: ["แดชบอร์ด", "DASHBOARD"],
    Clothing: ["เสื้อผ้า", "CLOTHING"],
    Shoes: ["รองเท้า", "SHOES"],
    Loudspeaker: ["ลำโพง", "LOUDSPEAKER"],
    Guitar: ["กีต้าร์", "GUITAR"],
    Headphones: ["หูฟัง", "HEADPHONES"],
    Phone: ["โทรศัพท์", "PHONE"],
    ProductList: ["สินค้าที่เลือก", "PRODUCT LIST"],
    ProductHistory: ["สินค้าที่สั่งซื้อแล้ว", "PRODUCT HISTORY"],
    ProductShipping: ["สินค้ากำลังจัดส่ง", "PRODUCT SHIPPING"],
    Setting: ["ตั้งค้า", "SETTING"],
    Payment: ["ชำระเงิน", "PAYMENT"],
    Search: ["ค้นหา", "Search"],
    RecommendedProducts: ["สินค้าแนะนำ", "Recommended Products"],
  };
  const getTH = () => {
      SetLanguage.Home = Language.Home[indexTH];
      SetLanguage.Clothing = Language.Clothing[indexTH];
      SetLanguage.Shoes = Language.Shoes[indexTH];
      SetLanguage.Loudspeaker = Language.Loudspeaker[indexTH];
      SetLanguage.Guitar = Language.Guitar[indexTH];
      SetLanguage.Headphones = Language.Headphones[indexTH];
      SetLanguage.Phone = Language.Phone[indexTH];
      SetLanguage.ProductList = Language.ProductList[indexTH];
      SetLanguage.ProductHistory = Language.ProductHistory[indexTH];
      SetLanguage.ProductShipping = Language.ProductShipping[indexTH];
      SetLanguage.Setting = Language.Setting[indexTH];
      SetLanguage.Payment = Language.Payment[indexTH];
      SetLanguage.Search = Language.Search[indexTH];
      SetLanguage.RecommendedProducts = Language.RecommendedProducts[indexTH];
    return SetLanguage;
  };
  const getEN = () => {
      SetLanguage.Home = Language.Home[indexEN];
      SetLanguage.Clothing = Language.Clothing[indexEN];
      SetLanguage.Shoes = Language.Shoes[indexEN];
      SetLanguage.Loudspeaker = Language.Loudspeaker[indexEN];
      SetLanguage.Guitar = Language.Guitar[indexEN];
      SetLanguage.Headphones = Language.Headphones[indexEN];
      SetLanguage.Phone = Language.Phone[indexEN];
      SetLanguage.ProductList = Language.ProductList[indexEN];
      SetLanguage.ProductHistory = Language.ProductHistory[indexEN];
      SetLanguage.ProductShipping = Language.ProductShipping[indexEN];
      SetLanguage.Payment = Language.Payment[indexEN];
      SetLanguage.Setting = Language.Setting[indexEN];
      SetLanguage.Search = Language.Search[indexEN];
      SetLanguage.RecommendedProducts = Language.RecommendedProducts[indexEN];
    return SetLanguage;
  };

  if (lang?.toUpperCase() == "TH") {
    return getTH();
  }
  return getEN();
};
