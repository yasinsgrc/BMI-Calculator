import React from "react";
import {Row, Col, Card, Table } from "react-bootstrap";

const BmiDetail = () => {
  const bmi = localStorage.getItem("bmi");
  const kilo = localStorage.getItem("kilo");
  const boy = (localStorage.getItem("boy") / 100).toFixed(2);

  const Diet = () => {
    if (bmi >= 10 && bmi <= 18) {
      return (
        <div>
          <br />
          <Card.Text>
            <Card.Title>
              Sağlıklı Kilo Almak İçin Önerilere Kulak Verin
            </Card.Title>
            Güne 1 su bardağı veya 1 çay bardağı kadar sade kefir ile başlayın.
            Uyanır uyanmaz bunu alışkanlık haline getirin. Kahvaltı yapmayı
            ihmal etmeyin. Kilo almak isteyenlerin en iştahsız olduğu öğün sabah
            saatlerdir. Dolu dolu bir öğün yapmak zorunda olmasanız da yumurta
            ve yanında 1 küçük muz, 1-2 dilim peynir, 1-2 adet grisini gibi
            alternatifler de sağlıklı bir kahvaltı yerine geçecektir. Öğle ve
            akşam ana öğünlerini mutlaka yapın. Yemek yemeye çorba ile değil ana
            yemek ile başlayın. Günlük protein miktarınızı tamamlamaya özen
            gösterin. Örneğin 45 kg iseniz günde 60 gr kadar protein
            almalısınız. Hayvansal gıdalar protein açısından zengin olan
            gıdalardır. (60 gr protein: 1 yumurta + 2 dilim (60 gr peynir) + 1
            su bardağı kefir + 1 kâse yoğurt (300 ml) + 150 gr et veya tavuk
            veya balık olarak hesaplanabilir) Karbonhidrat tüketirken rafine
            olanları değil kompleks olanları seçin. Yani şeker ve şeker içeren
            gıdalar, beyaz un ve ürünleri, mısır (glikoz) şurubu içeren
            besinlerden uzak durun. Tam tahıllı un ve ürünlerini, kuru
            baklagilleri tercih edin. Günde 1 yemek kaşığı bal, reçel veya
            pekmezden fazlasını tüketmeyin. Günde 1 avuç içi kadar kuruyemiş
            (ceviz, fındık, fıstık, kaju, kabak çekirdeği) tüketin. Günde 1-2
            porsiyon taze mevsim meyvesini mutlaka tüketin. Günde 8-10 su
            bardağı su tüketin. Bu suyu öğünlerle birlikte değil öğün aralarında
            tüketmeyi tercih edin. Her tedavi gibi beslenme tedavilerinin de
            kişiye özel olduğunu unutmayın. Mutlaka uzman ve diyetisyen
            kontrolünde ilerleyin. Beslenmenin yanında destek ürünlere veya
            destek medikal tedavilere ihtiyacınız olabileceğini unutmayın.
          </Card.Text>
        </div>
      );
    } else if (bmi >= 18 && bmi <= 25) {
      return (
        <div>
          <br />
          <Card.Text>
            <Card.Title>Kilo koruma listesi örneğini inceleyelim</Card.Title>
            Sabah aç karnına 2 bardak su Kahvaltı: Çay, ıhlamur veya kahve
            çeşitleri, istenirse bir bardak yağsız süt. 30 gram (bir kibrit
            kutusu kadar) peynir veya bir yumurta Bir dilim kepek ekmeği
            Sabah­öğle arası: 4­5 bardak sıvı Öğle: Önce çorba Serbest miktarda
            sebze ve salata Protein grubundan bir seçenek (150 gr yağsız et,
            balık, 3 yumurta akı ve birinin sarısından yapılan menemen ya da
            200­-300 gr süt – yoğurt) Bir dilim kepekli ekmek 16.00 ­17.00: Üç
            adet kepekli bisküvi veya bir adet meyve Akşam: Önce çorba Serbest
            miktarda sebze ve salata Protein grubundan bir seçenek (150 gr
            yağsız et, balık, 3 yumurta akı ve birinin sarısından yapılan
            menemen ya da 200­-300 gr süt – yoğurt) Bir dilim kepekli ekmek
            Gece: Bir adet meyve
          </Card.Text>
        </div>
      );
    } else if (bmi >= 25 && bmi <= 30) {
      return (
        <div>
          <br />
          <Card.Text>
            <Card.Title>Akdeniz Diyeti</Card.Title>
            Akdeniz diyeti Temel olarak İspanya, Fransa, İtalya ve Yunanistan
            gibi Akdeniz kıyısı halkının beslenme alışkanlıklarını benimseyen
            Akdeniz diyeti, geçen sene olduğu gibi bu sene de genel kategoride
            birinci sırada. Akdeniz diyeti, 'sağlıklı beslenme için en iyi
            diyetler, uygulaması en kolay diyetler, diyabet için en iyi diyetler
            ve bitki bazlı en iyi diyetler' olmak üzere 4 kategoriye daha
            girmeyi başardı. Dünya çapında popülerliğini yıllardır koruyan
            beslenme şekli, mümkün olduğu kadar az kırmızı et, şeker ve doymuş
            yağlardan uzak kalma prensibine dayanıyor. Akdeniz'in doğal
            ürünlerini tüketmeye odaklı diyette kabuklu yemişler ve tahıl grubu
            ise büyük önem taşıyor.
            <hr/>
            <Card.Title>Akdeniz diyeti nasıl yapılır?</Card.Title>
            Sıkı bir diyetten ziyade lezzetli bir beslenme alışkanlığı olarak
            değerlendirilebilecek Akdeniz diyetinde süt, peynir, yoğurt gibi
            günlük süt ürünlerine yer var, ancak sınırlı tüketiliyor. Akdeniz
            diyetine uygun bir öğlen yemeğinde, mevsim yeşillikleriyle birlikte
            salatalık, domatesli bir salata, daha doyurucu olması için bir
            kurubaklagil çeşidiyle birlikte tercih edilebilir. Dünyaca ünlü
            İspanyol oyuncu Penelope Cruz, 2011'de oğlu Leo'yu dünyaya
            getirdikten 4 ay sonra, ideal kilosuna ülkesinin geleneksel beslenme
            stiliyle ulaştığını söylemişti.
          </Card.Text>
        </div>
      );
    } else if (bmi >= 30 && bmi <= 40) {
      return (
        <div>
          <br />
          <Card.Text>
            <Card.Title>Malesef BMI Değeriniz Çok Yüksek</Card.Title>
            Obezite hastalığının tedavisi açısından yapılması gereken ilk
            şeylerden biri beslenme alışkanlığında önemli ve etkili
            değişiklikler yapmaktır. Bunun açısından obezite hastalarının
            ihtiyacı olan şey ise, obezite uygun bir diyet programıdır. Obezite
            hastaları, obezite diyet listesi programına düzenli ve itinalı bir
            biçimde uydukları zaman, obez olma derdinden yavaş yavaş
            kurtulacaklardır. Hem böylece başka sağlı problemlerinin görülme
            riski azalmış hem de vücut daha biçimli bir hal almış olur. Obezite
            hastalarına uzman hekimlerce önerilen bir diyeti sizlerle paylaşmak
            istiyorum. Tüm öğünlerde yer alan besinleri gereken ölçüde ve
            sırasına göre tükettiğinizde, bu diyet programının ne derece faydalı
            olduğuna bir müddet sonra şahit olacaksınız. obeziteden kurtulmak
            açısından çabuk etmemeli ve kilolarınızı yavaş yavaş vermelisiniz.
            Hızlı verilen kilolar sağlığı ciddi anlamda tehdit edeceği
            unutulmamalıdır. İşte kahvaltı hariç tüm diğer öğünlerde verilenler
            verildiği sırada tüketilecek olan obezite diyet listesi programı.
            <hr/><Card.Title>Sabah kahvaltısı</Card.Title>Sabah kahvaltısı
            1 ince dilim kepekli ekmek, Kibrit kutusu hacminde Tuzsuz Lor
            Peyniri (çok mecbur kalındığında ise mümkün olduğunca tuzsuz ve az
            yağlı ak peynir de olabilir.) 1 sayı Haşlanmış yumurtanın beyazı
            Söğüş Domates, Salatalık Şekersiz Yeşil Çay
            <hr/> <Card.Title>Ara öğün</Card.Title>1 boyut meyve. (Muz,
            Çilek, Kivi, Kavun gibi meyveler tercih edilmeyecek, Posalı Meyveler
            : Ekşi Elma, Portakal, en çok 6 sayı Yeşil Erik gibi)
            <hr/>
            <Card.Title>Öğlen yiyeceği</Card.Title>2 Bardak su Yeşil Salata
            (Yağsız, Tuzsuz, Bol elma sirkesi veya Limon) 8 Kaşık Sebze yiyeceği
            (Burada kastedilen salçasız, yağsız, tuzsuz, az baharatlı) Yumurta
            büyüklüğünde 2 parça tavuk veya balık (Yağsız, Tuzsuz, Haşlama veya
            Izgara)
            <hr/> <Card.Title>Ara öğün</Card.Title>1 boyut meyve. (Muz,
            Çilek, Kivi, Kavun gibi meyveler tercih edilmeyecek, Posalı Meyveler
            : Ekşi Elma, Portakal, En çok 6 sayı Yeşil Erik gibi)
            <hr/><Card.Title>Akşam yiyeceği</Card.Title>2 Bardak su Yeşil
            Salata (Yağsız, Tuzsuz, Bol elma sirkesi veya Limon) 8 Kaşık Sebze
            yiyeceği (Burda kastedilen salçasız, yağsız, tuzsuz, az baharatlı)
            Akşam yemeğinden 1 saat sonra yarım bardak Liğht Yoğurt (100ML) Ara
            öğün
            <hr/> <Card.Title>Ara öğün</Card.Title>1 boyut meyve. (Muz,
            Çilek, Kivi, Kavun gibi meyveler tercih edilmeyecek, Posalı Meyveler
            : Ekşi Elma, Portakal, en çok 6 sayı Yeşil Erik gibi)
          </Card.Text>
        </div>
      );
    } else {
      return <h1>Aşırı Şişman </h1>;
    }
  };

  return (
    <div >
      <div className="tablesticky">
        {" "}
        <Col >
          <Card
            bg={"dark"}
            key={8}
            text={"white"}
            style={{ width: "18rem" }}
          >
            <Row>
              <Col>
                <Card.Header>
                  <Card.Title>Vücut Kitle İndeksiniz {bmi}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th colSpan="2">10-18,15</th>
                        <th colSpan="2">Zayıf</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colSpan="2">18,5-25</th>
                        <th colSpan="2">Sağlıklı</th>
                      </tr>
                      <tr>
                        <th colSpan="2">25,30</th>
                        <th colSpan="2">Kilolu</th>
                      </tr>
                      <tr>
                        <th colSpan="2">30-40</th>
                        <th colSpan="2">Şişman</th>
                      </tr>
                      <tr>
                        <th colSpan="2">40-60</th>
                        <th colSpan="2">Aşırı Şişman</th>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        </div>

        <div className="marginify">
         <Col>
            <Card
              bg={"dark"}
              key={8}
              text={"white"}
              style={{ width: "38rem" }}
            >
              <Row>
                <Col>
                  <Card.Header>
                    <Card.Title>BMI Bilgileriniz ve Diyet Listesi</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      Vücut Kitle İndeksiniz şu şekilde hesaplanmaktadır.
                      <hr/>
                      <Card.Title>
                        {" "}
                        {kilo}/{boy}*{boy}={bmi}{" "}
                      </Card.Title>
                      
                      Kısaca kilonuzun, boyunuzun karesine bölümüdür.
                      <hr/>
                      <Diet />
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
      </div>
    </div>
  );
};

export default BmiDetail;
