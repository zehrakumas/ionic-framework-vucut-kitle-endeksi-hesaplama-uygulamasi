import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //değişkenleri tanımladım.
  boy:number;
  kilo:number;
  sonuc:number;
  constructor() {}

  hesapla()
  {
   if(this.kilo/(this.boy*this.boy)>=0 && this.kilo/(this.boy*this.boy)<=18.4) 
   {
      console.log("0 ila 18,4 BMI: Zayıf. Kişinin boyuna oranla ağırlığının yetersiz olduğunu ifade eden bu değer ile karşılaşılması durumunda kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması önerilir.");
      this.sonuc=1;
    }
   else if(this.kilo/(this.boy*this.boy)>=18.5 && this.kilo/(this.boy*this.boy)<=24.9)
   {
     console.log("18.5 ila 24.9 BMI: Normal. Bu değer aralığı kişinin ideal kiloda olduğunu gösterir. Bu değere sahip olan kişilerin düzenli, dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.");
     this.sonuc=2;
    }
   else if(this.kilo/(this.boy*this.boy)>=25 && this.kilo/(this.boy*this.boy)<=29.9) 
   {
     console.log("25 ila 29.9 BMI: Fazla Kilolu. Kişinin boyuna oranla kilosunun fazla olduğunu gösteren bu değer aralığında kişinin uygun diyet ile fazla kilolarından kurtulması önerilir.");
     this.sonuc=3;
    }
   else if(this.kilo/(this.boy*this.boy)>=30 && this.kilo/(this.boy*this.boy)<=34.9)
   {
     console.log("30 ila 34.9 BMI: Şişman. Birinci derece obez kategorisinde değerlendiren değer aralığında, kişinin kilosunun sağlık açısından risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin diyetisyen yardımıyla kilo vermesi önerilir.");
     this.sonuc=4;
    }
   else if(this.kilo/(this.boy*this.boy)>=35 && this.kilo/(this.boy*this.boy)<=44.9)
   {
     console.log("35 ila 44.9 BMI: Şişman. İkinci derece obez olarak tanımlanan bu değerlere sahip olan kişilerde kalp ve damar hastalıkları bakımından risk artar. Kişinin kilo vermek için diyetisyene başvurması önerilir.");
     this.sonuc=5;
    }
   else if(this.kilo/(this.boy*this.boy)>=45)
   {
    console.log("Aşırı Şişman. Üçüncü derece obez kategorisinde olan bu kişilerde hastalık gelişme riski çok yüksektir. Hekim ve diyetisyen eşliğinde kilo verilmesi önerilir.");
    this.sonuc=6;
  }
   else{
     console.log("Lütfen geçerli ifadeler giriniz.");
     this.sonuc=7;
   }


  }

}
