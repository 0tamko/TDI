import type { UpgradeList } from "../model/upgradeList";

export const upgrades : UpgradeList[] = 
[
    {
        id: 0,
        image : "",
        name : "Basic Tools",
        clickMultiplier: 1.05,
        basePrice: 5,
        actualPrice: 5,
        pricemultiplier : 1.15,
        description: "Základné nástroje pre efektívnejšiu výrobu. Klikový multiplikátor +5%",
    },
    {
        id: 1,
        image : "",
        name : "Automated Conveyor",
        clickMultiplier : 1.1,
        basePrice : 20,
        actualPrice: 20,
        pricemultiplier : 1.15,
        description : "Dopravníky zrýchľujú výrobu. Klikový multiplikátor +10%",
    },
    {
        id: 2,
        image: "",
        name : "Industrial Robots",
        clickMultiplier : 1.2,
        basePrice : 50,
        actualPrice: 50,
        pricemultiplier : 1.15,
        description : "Roboty nahrádzajú manuálnu prácu. Klikový multiplikátor +20%",
    },
    {
        id: 3,
        image : "",
        name : "AI-Controlled Assembly Line",
        clickMultiplier : 1.3,
        basePrice : 100,
        actualPrice: 100,
        pricemultiplier : 1.15,
        description : "Umelá inteligencia optimalizuje výrobu. Klikový multiplikátor +30%",
    }
  ]
