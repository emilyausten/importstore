"use client";
import Header from "../../src/components/Ticket/Header";
import StepBreadcump from "../../src/components/Ticket/StepBreadcump";
import certificate from "../../src/assets/images/certificate.svg";
import useClient from "../../src/hooks/useClient";
import Link from "next/link";
import useCart from "../../src/hooks/useCart";
import { formatPriceBRL } from "../../src/utils/currency";
import moment from "moment";
import { useState } from "react";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import ModalPix from "@/src/components/Modals/PixModals";

export default function Payment() {
  const { email, name, phone } = useClient();
  const { cart } = useCart();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [qrCodePix, setQrCodePix] = useState({
    urlImage: "",
    code: "",
    message: "",
  });
  moment.locale("pt-br");

  async function createPayment() {
    // setIsLoading(true);
    setIsOpenModal(true);
    const products = cart.items.map((product) => {
      return {
        id: product.id,
        image: "https://a.com/image.png",
        title: faker.commerce.productName(),
        qnt: product.quantity,
        amount: product.price.toString(),
      };
    });
    const newProducts = [
      ...products,
      {
        id: Math.random(),
        image: "https://a.com/image.png",
        title: "Taxa",
        qnt: "1",
        amount: "10",
      },
      {
        id: Math.random(),
        image: "https://a.com/image.png",
        title: "Serviço",
        qnt: "1",
        amount: "6.75",
      },
    ];
    const response: any = await fetch("/api/payment", {
      body: JSON.stringify({ products: newProducts }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    setQrCodePix({
      message: response.fatura.status.description,
      code: response.fatura.pix.payload,
      urlImage: response.fatura.pix.image,
    });
    setIsLoading(false);
  }

  return (
    <main className="blackout">
      <ModalPix
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        qrCodePix={qrCodePix}
        isLoading={isLoading}
      />
      <Header />
      <div className="breadcrumbs ng-scope">
        <StepBreadcump step={4} />
      </div>
      <div id="main-view" className="main-view transition ng-scope">
        <div className="payment ng-scope" data-ng-show="!visibleLoader">
          <header className="payment__header">
            <div className="page-header aph p-5-bot">
              <h1 className="page-header__title ng-binding">PAGAMENTO</h1>
            </div>
          </header>
          <section className="payment__buyer">
            <div className="aph container">
              <div>
                <div className="user-info ng-scope">
                  <div className="user-info__pic-frame">
                    <Image
                      className="user-info__pic"
                      data-ng-src="https://api.ingresse.com/user/10683704/picture/?apikey=172f24fd2a903fc0647b61d7112ee1b9814702be"
                      alt="Foto de Kauan Costa"
                      width={200}
                      height={200}
                      src="https://api.ingresse.com/user/10683704/picture/?apikey=172f24fd2a903fc0647b61d7112ee1b9814702be"
                    />
                  </div>
                  <div className="user-info__body">
                    <div className="user-info__body__name ng-binding">
                      {name}
                    </div>
                    <div className="user-info__body__email ng-binding">
                      {email}
                    </div>
                  </div>
                  <div
                    className="user-info__footer"
                    data-ng-hide="isExtendedLoginActive"
                  >
                    <a
                      className="btn-action ng-binding"
                      role="button"
                      data-ng-click="logout()"
                      id="user_link_logout"
                    >
                      ENVIAREMOS SUA RESERVA POR E-MAIL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ngIf: couponEnabled */}
          <section className="payment__methods">
            <div className="aph container">
              <div get-value=""></div>
            </div>
          </section>
          <section
            className="payment__address payment__address--edit"
            data-ng-show="displayBillingAddress"
          >
            <div className="aph container">
              <h2 className="aph title--dark ng-binding" id="address_title">
                Endereço de cobrança
              </h2>
              <p className="aph hint m--5-top m-10-bot m-5-top-xs ng-binding">
                Precisamos do seu endereço apenas para garantir a segurança do
                seu pagamento.
              </p>
              <div className="ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength ng-valid-mask">
                <div className="ng-isolate-scope">
                  <address className="address ng-hide" data-ng-hide="editMode">
                    <p
                      className="address__street ng-binding"
                      id="address_street"
                    ></p>
                    <p
                      className="address__resume ng-binding"
                      id="address_resume"
                    >
                      Tel: {phone}
                    </p>
                    <div className="address__action">
                      <a
                        className="btn-action ng-binding"
                        id="address_edit"
                        role="button"
                      >
                        Preencha o endereço
                      </a>
                    </div>
                  </address>
                  <form
                    className="aph form m--15-top p-10-bot ng-pristine ng-invalid ng-invalid-required ng-valid-minlength ng-valid-maxlength ng-valid-mask"
                    name="addressForm"
                  >
                    <div className="row">
                      <div className="col-xs-12 col-sm-8">
                        <div className="aph form__field">
                          <label className="aph form__label" htmlFor="country">
                            País
                          </label>
                          <select
                            className="aph form__control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                            id="userNationality"
                            name="userNationality"
                            data-ng-model="edited.address.country"
                            data-ng-required="true"
                            data-ng-change="changeNationality();"
                            data-ng-options="country.alpha3Code as country.name for country in nationalities"
                            required
                          >
                            <option />
                            <option label="Brasil" value="string:BRA">
                              Brasil
                            </option>
                            <option label="Espanha" value="string:ESP">
                              Espanha
                            </option>
                            <option label="Uruguai" value="string:URY">
                              Uruguai
                            </option>
                            <option label="Afeganistão" value="string:AFG">
                              Afeganistão
                            </option>
                            <option label="Albânia" value="string:ALB">
                              Albânia
                            </option>
                            <option label="Alemanha" value="string:DEU">
                              Alemanha
                            </option>
                            <option label="Andorra" value="string:AND">
                              Andorra
                            </option>
                            <option label="Angola" value="string:AGO">
                              Angola
                            </option>
                            <option label="Anguilla" value="string:AIA">
                              Anguilla
                            </option>
                            <option
                              label="Antígua e Barbuda"
                              value="string:ATG"
                            >
                              Antígua e Barbuda
                            </option>
                            <option label="Argentina" value="string:ARG">
                              Argentina
                            </option>
                            <option label="Argélia" value="string:DZA">
                              Argélia
                            </option>
                            <option label="Armênia" value="string:ARM">
                              Armênia
                            </option>
                            <option label="Aruba" value="string:ABW">
                              Aruba
                            </option>
                            <option label="Arábia Saudita" value="string:SAU">
                              Arábia Saudita
                            </option>
                            <option label="Austrália" value="string:AUS">
                              Austrália
                            </option>
                            <option label="Azerbaijão" value="string:AZE">
                              Azerbaijão
                            </option>
                            <option label="Bahamas" value="string:BHS">
                              Bahamas
                            </option>
                            <option label="Bahrein" value="string:BHR">
                              Bahrein
                            </option>
                            <option label="Bangladesh" value="string:BGD">
                              Bangladesh
                            </option>
                            <option label="Barbados" value="string:BRB">
                              Barbados
                            </option>
                            <option label="Belarus" value="string:BLR">
                              Belarus
                            </option>
                            <option label="Belize" value="string:BLZ">
                              Belize
                            </option>
                            <option label="Benin" value="string:BEN">
                              Benin
                            </option>
                            <option label="Bermudas" value="string:BMU">
                              Bermudas
                            </option>
                            <option label="Bolívia" value="string:BOL">
                              Bolívia
                            </option>
                            <option label="Botsuana" value="string:BWA">
                              Botsuana
                            </option>
                            <option label="Brunei" value="string:BRN">
                              Brunei
                            </option>
                            <option label="Bulgária" value="string:BGR">
                              Bulgária
                            </option>
                            <option label="Burkina Fasso" value="string:BFA">
                              Burkina Fasso
                            </option>
                            <option label="Burundi" value="string:BDI">
                              Burundi
                            </option>
                            <option label="Butão" value="string:BTN">
                              Butão
                            </option>
                            <option label="Bélgica" value="string:BEL">
                              Bélgica
                            </option>
                            <option
                              label="Bósnia-Herzegóvina"
                              value="string:BIH"
                            >
                              Bósnia-Herzegóvina
                            </option>
                            <option label="Cabo Verde" value="string:CPV">
                              Cabo Verde
                            </option>
                            <option label="Camarões" value="string:CMR">
                              Camarões
                            </option>
                            <option label="Camboja" value="string:KHM">
                              Camboja
                            </option>
                            <option label="Canadá" value="string:CAN">
                              Canadá
                            </option>
                            <option label="Cazaquistão" value="string:KAZ">
                              Cazaquistão
                            </option>
                            <option label="Chade" value="string:TCD">
                              Chade
                            </option>
                            <option label="Chile" value="string:CHL">
                              Chile
                            </option>
                            <option label="China" value="string:CHN">
                              China
                            </option>
                            <option label="Chipre" value="string:CYP">
                              Chipre
                            </option>
                            <option label="Cingapura" value="string:SGP">
                              Cingapura
                            </option>
                            <option label="Colômbia" value="string:COL">
                              Colômbia
                            </option>
                            <option label="Comores" value="string:COM">
                              Comores
                            </option>
                            <option label="Congo" value="string:COG">
                              Congo
                            </option>
                            <option label="Coréia do Norte" value="string:PRK">
                              Coréia do Norte
                            </option>
                            <option label="Coréia do Sul" value="string:KOR">
                              Coréia do Sul
                            </option>
                            <option label="Costa Rica" value="string:CRI">
                              Costa Rica
                            </option>
                            <option label="Costa do Marfim" value="string:CIV">
                              Costa do Marfim
                            </option>
                            <option label="Croácia" value="string:HRV">
                              Croácia
                            </option>
                            <option label="Cuba" value="string:CUB">
                              Cuba
                            </option>
                            <option label="Curaçao" value="string:CUW">
                              Curaçao
                            </option>
                            <option label="Dinamarca" value="string:DNK">
                              Dinamarca
                            </option>
                            <option label="Djibuti" value="string:DJI">
                              Djibuti
                            </option>
                            <option label="Dominica" value="string:DMA">
                              Dominica
                            </option>
                            <option label="Egito" value="string:EGY">
                              Egito
                            </option>
                            <option label="El Salvador" value="string:SLV">
                              El Salvador
                            </option>
                            <option
                              label="Emirados Árabes Unidos"
                              value="string:ARE"
                            >
                              Emirados Árabes Unidos
                            </option>
                            <option label="Equador" value="string:ECU">
                              Equador
                            </option>
                            <option label="Eritréia" value="string:ERI">
                              Eritréia
                            </option>
                            <option label="Eslováquia" value="string:SVK">
                              Eslováquia
                            </option>
                            <option label="Eslovênia" value="string:SVN">
                              Eslovênia
                            </option>
                            <option label="Estados Unidos" value="string:USA">
                              Estados Unidos
                            </option>
                            <option label="Estônia" value="string:EST">
                              Estônia
                            </option>
                            <option label="Etiópia" value="string:ETH">
                              Etiópia
                            </option>
                            <option label="Fiji" value="string:FJI">
                              Fiji
                            </option>
                            <option label="Filipinas" value="string:PHL">
                              Filipinas
                            </option>
                            <option label="Finlândia" value="string:FIN">
                              Finlândia
                            </option>
                            <option label="França" value="string:FRA">
                              França
                            </option>
                            <option label="Gabão" value="string:GAB">
                              Gabão
                            </option>
                            <option label="Gana" value="string:GHA">
                              Gana
                            </option>
                            <option label="Geórgia" value="string:GEO">
                              Geórgia
                            </option>
                            <option label="Gibraltar" value="string:GIB">
                              Gibraltar
                            </option>
                            <option label="Granada" value="string:GRD">
                              Granada
                            </option>
                            <option label="Groelândia" value="string:GRL">
                              Groelândia
                            </option>
                            <option
                              label="Grã-Bretanha (Reino Unido, UK)"
                              value="string:GBR"
                            >
                              Grã-Bretanha (Reino Unido, UK)
                            </option>
                            <option label="Grécia" value="string:GRC">
                              Grécia
                            </option>
                            <option label="Guadalupe" value="string:GLP">
                              Guadalupe
                            </option>
                            <option
                              label="Guam (Território dos Estados Unidos)"
                              value="string:GUM"
                            >
                              Guam (Território dos Estados Unidos)
                            </option>
                            <option label="Guatemala" value="string:GTM">
                              Guatemala
                            </option>
                            <option label="Guiana" value="string:GUY">
                              Guiana
                            </option>
                            <option label="Guiana Francesa" value="string:GUF">
                              Guiana Francesa
                            </option>
                            <option label="Guiné" value="string:GIN">
                              Guiné
                            </option>
                            <option label="Guiné Equatorial" value="string:GNQ">
                              Guiné Equatorial
                            </option>
                            <option label="Guiné-Bissau" value="string:GNB">
                              Guiné-Bissau
                            </option>
                            <option label="Gâmbia" value="string:GMB">
                              Gâmbia
                            </option>
                            <option label="Haiti" value="string:HTI">
                              Haiti
                            </option>
                            <option label="Holanda" value="string:NLD">
                              Holanda
                            </option>
                            <option label="Honduras" value="string:HND">
                              Honduras
                            </option>
                            <option label="Hong Kong" value="string:HKG">
                              Hong Kong
                            </option>
                            <option label="Hungria" value="string:HUN">
                              Hungria
                            </option>
                            <option label="Ilha Natal" value="string:CXR">
                              Ilha Natal
                            </option>
                            <option label="Ilha Pitcairn" value="string:PCN">
                              Ilha Pitcairn
                            </option>
                            <option label="Ilha Reunião" value="string:REU">
                              Ilha Reunião
                            </option>
                            <option label="Ilhas Cayman" value="string:CYM">
                              Ilhas Cayman
                            </option>
                            <option label="Ilhas Cocos" value="string:CCK">
                              Ilhas Cocos
                            </option>
                            <option label="Ilhas Cook" value="string:COK">
                              Ilhas Cook
                            </option>
                            <option label="Ilhas Faroes" value="string:FRO">
                              Ilhas Faroes
                            </option>
                            <option label="Ilhas Malvinas" value="string:FLK">
                              Ilhas Malvinas
                            </option>
                            <option
                              label="Ilhas Marianas do Norte"
                              value="string:MNP"
                            >
                              Ilhas Marianas do Norte
                            </option>
                            <option label="Ilhas Marshall" value="string:MHL">
                              Ilhas Marshall
                            </option>
                            <option
                              label="Ilhas Menores dos Estados Unidos"
                              value="string:UMI"
                            >
                              Ilhas Menores dos Estados Unidos
                            </option>
                            <option label="Ilhas Norfolk" value="string:NFK">
                              Ilhas Norfolk
                            </option>
                            <option label="Ilhas Salomão" value="string:SLB">
                              Ilhas Salomão
                            </option>
                            <option label="Ilhas Seychelles" value="string:SYC">
                              Ilhas Seychelles
                            </option>
                            <option label="Ilhas Tokelau" value="string:TKL">
                              Ilhas Tokelau
                            </option>
                            <option
                              label="Ilhas Turks e Caicos"
                              value="string:TCA"
                            >
                              Ilhas Turks e Caicos
                            </option>
                            <option
                              label="Ilhas Virgens (Estados Unidos)"
                              value="string:VIR"
                            >
                              Ilhas Virgens (Estados Unidos)
                            </option>
                            <option
                              label="Ilhas Virgens (Inglaterra)"
                              value="string:VGB"
                            >
                              Ilhas Virgens (Inglaterra)
                            </option>
                            <option label="Indonésia" value="string:IDN">
                              Indonésia
                            </option>
                            <option label="Iraque" value="string:IRQ">
                              Iraque
                            </option>
                            <option label="Irlanda" value="string:IRL">
                              Irlanda
                            </option>
                            <option label="Irã" value="string:IRN">
                              Irã
                            </option>
                            <option label="Islândia" value="string:ISL">
                              Islândia
                            </option>
                            <option label="Israel" value="string:ISR">
                              Israel
                            </option>
                            <option label="Itália" value="string:ITA">
                              Itália
                            </option>
                            <option label="Iêmen" value="string:YEM">
                              Iêmen
                            </option>
                            <option label="Jamaica" value="string:JAM">
                              Jamaica
                            </option>
                            <option label="Japão" value="string:JPN">
                              Japão
                            </option>
                            <option label="Jordânia" value="string:JOR">
                              Jordânia
                            </option>
                            <option label="Kiribati" value="string:KIR">
                              Kiribati
                            </option>
                            <option label="Kuait" value="string:KWT">
                              Kuait
                            </option>
                            <option label="Laos" value="string:LAO">
                              Laos
                            </option>
                            <option label="Lesoto" value="string:LSO">
                              Lesoto
                            </option>
                            <option label="Letônia" value="string:LVA">
                              Letônia
                            </option>
                            <option label="Libéria" value="string:LBR">
                              Libéria
                            </option>
                            <option label="Liechtenstein" value="string:LIE">
                              Liechtenstein
                            </option>
                            <option label="Lituânia" value="string:LTU">
                              Lituânia
                            </option>
                            <option label="Luxemburgo" value="string:LUX">
                              Luxemburgo
                            </option>
                            <option label="Líbano" value="string:LBN">
                              Líbano
                            </option>
                            <option label="Líbia" value="string:LBY">
                              Líbia
                            </option>
                            <option label="Macau" value="string:MAC">
                              Macau
                            </option>
                            <option
                              label="Macedônia (República Yugoslava)"
                              value="string:MKD"
                            >
                              Macedônia (República Yugoslava)
                            </option>
                            <option label="Madagascar" value="string:MDG">
                              Madagascar
                            </option>
                            <option label="Malaui" value="string:MWI">
                              Malaui
                            </option>
                            <option label="Maldivas" value="string:MDV">
                              Maldivas
                            </option>
                            <option label="Mali" value="string:MLI">
                              Mali
                            </option>
                            <option label="Malta" value="string:MLT">
                              Malta
                            </option>
                            <option label="Malásia" value="string:MYS">
                              Malásia
                            </option>
                            <option label="Marrocos" value="string:MAR">
                              Marrocos
                            </option>
                            <option label="Martinica" value="string:MTQ">
                              Martinica
                            </option>
                            <option label="Mauritânia" value="string:MRT">
                              Mauritânia
                            </option>
                            <option label="Maurício" value="string:MUS">
                              Maurício
                            </option>
                            <option label="Mayotte" value="string:MYT">
                              Mayotte
                            </option>
                            <option label="Micronésia" value="string:FSM">
                              Micronésia
                            </option>
                            <option label="Moldova" value="string:MDA">
                              Moldova
                            </option>
                            <option label="Mongólia" value="string:MNG">
                              Mongólia
                            </option>
                            <option label="Montenegro" value="string:MNE">
                              Montenegro
                            </option>
                            <option label="Montserrat" value="string:MSR">
                              Montserrat
                            </option>
                            <option label="Moçambique" value="string:MOZ">
                              Moçambique
                            </option>
                            <option label="Myanma" value="string:MMR">
                              Myanma
                            </option>
                            <option label="México" value="string:MEX">
                              México
                            </option>
                            <option label="Mônaco" value="string:MCO">
                              Mônaco
                            </option>
                            <option label="Namíbia" value="string:NAM">
                              Namíbia
                            </option>
                            <option label="Nauru" value="string:NRU">
                              Nauru
                            </option>
                            <option label="Nepal" value="string:NPL">
                              Nepal
                            </option>
                            <option label="Nicarágua" value="string:NIC">
                              Nicarágua
                            </option>
                            <option label="Nigéria" value="string:NGA">
                              Nigéria
                            </option>
                            <option label="Niue" value="string:NIU">
                              Niue
                            </option>
                            <option label="Noruega" value="string:NOR">
                              Noruega
                            </option>
                            <option label="Nova Caledônia" value="string:NCL">
                              Nova Caledônia
                            </option>
                            <option label="Nova Zelândia" value="string:NZL">
                              Nova Zelândia
                            </option>
                            <option label="Níger" value="string:NER">
                              Níger
                            </option>
                            <option label="Omã" value="string:OMN">
                              Omã
                            </option>
                            <option label="Palau" value="string:PLW">
                              Palau
                            </option>
                            <option label="Palestina" value="string:PSE">
                              Palestina
                            </option>
                            <option label="Panamá" value="string:PAN">
                              Panamá
                            </option>
                            <option label="Papua-Nova Guiné" value="string:PNG">
                              Papua-Nova Guiné
                            </option>
                            <option label="Paquistão" value="string:PAK">
                              Paquistão
                            </option>
                            <option label="Paraguai" value="string:PRY">
                              Paraguai
                            </option>
                            <option
                              label="Países Baixos Caribenhos"
                              value="string:BES"
                            >
                              Países Baixos Caribenhos
                            </option>
                            <option label="Peru" value="string:PER">
                              Peru
                            </option>
                            <option
                              label="Polinésia Francesa"
                              value="string:PYF"
                            >
                              Polinésia Francesa
                            </option>
                            <option label="Polônia" value="string:POL">
                              Polônia
                            </option>
                            <option label="Porto Rico" value="string:PRI">
                              Porto Rico
                            </option>
                            <option label="Portugal" value="string:PRT">
                              Portugal
                            </option>
                            <option label="Qatar" value="string:QAT">
                              Qatar
                            </option>
                            <option label="Quirguistão" value="string:KGZ">
                              Quirguistão
                            </option>
                            <option label="Quênia" value="string:KEN">
                              Quênia
                            </option>
                            <option
                              label="República Centro-Africana"
                              value="string:CAF"
                            >
                              República Centro-Africana
                            </option>
                            <option
                              label="República Democrática do Congo"
                              value="string:COD"
                            >
                              República Democrática do Congo
                            </option>
                            <option
                              label="República Dominicana"
                              value="string:DOM"
                            >
                              República Dominicana
                            </option>
                            <option label="República Tcheca" value="string:CZE">
                              República Tcheca
                            </option>
                            <option label="Romênia" value="string:ROU">
                              Romênia
                            </option>
                            <option label="Ruanda" value="string:RWA">
                              Ruanda
                            </option>
                            <option
                              label="Rússia (antiga URSS) - Federação Russa"
                              value="string:RUS"
                            >
                              Rússia (antiga URSS) - Federação Russa
                            </option>
                            <option label="Saara Ocidental" value="string:ESH">
                              Saara Ocidental
                            </option>
                            <option
                              label="Saint-Pierre e Miquelon"
                              value="string:SPM"
                            >
                              Saint-Pierre e Miquelon
                            </option>
                            <option label="Samoa Americana" value="string:ASM">
                              Samoa Americana
                            </option>
                            <option label="Samoa Ocidental" value="string:WSM">
                              Samoa Ocidental
                            </option>
                            <option label="San Marino" value="string:SMR">
                              San Marino
                            </option>
                            <option label="Santa Helena" value="string:SHN">
                              Santa Helena
                            </option>
                            <option label="Santa Lúcia" value="string:LCA">
                              Santa Lúcia
                            </option>
                            <option label="Senegal" value="string:SEN">
                              Senegal
                            </option>
                            <option label="Serra Leoa" value="string:SLE">
                              Serra Leoa
                            </option>
                            <option label="Somália" value="string:SOM">
                              Somália
                            </option>
                            <option label="Sri Lanka" value="string:LKA">
                              Sri Lanka
                            </option>
                            <option label="Suazilândia" value="string:SWZ">
                              Suazilândia
                            </option>
                            <option label="Sudão" value="string:SDN">
                              Sudão
                            </option>
                            <option label="Sudão do Sul" value="string:SSD">
                              Sudão do Sul
                            </option>
                            <option label="Suriname" value="string:SUR">
                              Suriname
                            </option>
                            <option label="Suécia" value="string:SWE">
                              Suécia
                            </option>
                            <option label="Suíça" value="string:CHE">
                              Suíça
                            </option>
                            <option label="Svalbard" value="string:SJM">
                              Svalbard
                            </option>
                            <option label="São Bartolomeu" value="string:BLM">
                              São Bartolomeu
                            </option>
                            <option
                              label="São Cristóvão e Névis"
                              value="string:KNA"
                            >
                              São Cristóvão e Névis
                            </option>
                            <option label="São Martim" value="string:MAF">
                              São Martim
                            </option>
                            <option label="São Martinho" value="string:SXM">
                              São Martinho
                            </option>
                            <option
                              label="São Tomé e Príncipe"
                              value="string:STP"
                            >
                              São Tomé e Príncipe
                            </option>
                            <option
                              label="São Vicente e Granadinas"
                              value="string:VCT"
                            >
                              São Vicente e Granadinas
                            </option>
                            <option label="Sérvia" value="string:SRB">
                              Sérvia
                            </option>
                            <option label="Síria" value="string:SYR">
                              Síria
                            </option>
                            <option label="Tailândia" value="string:THA">
                              Tailândia
                            </option>
                            <option label="Taiwan" value="string:TWN">
                              Taiwan
                            </option>
                            <option label="Tajiquistão" value="string:TJK">
                              Tajiquistão
                            </option>
                            <option label="Tanzânia" value="string:TZA">
                              Tanzânia
                            </option>
                            <option
                              label="Território Britânico do Oceano índico"
                              value="string:IOT"
                            >
                              Território Britânico do Oceano índico
                            </option>
                            <option label="Timor-Leste" value="string:TLS">
                              Timor-Leste
                            </option>
                            <option label="Togo" value="string:TGO">
                              Togo
                            </option>
                            <option label="Tonga" value="string:TON">
                              Tonga
                            </option>
                            <option
                              label="Trinidad e Tobago"
                              value="string:TTO"
                            >
                              Trinidad e Tobago
                            </option>
                            <option label="Tunísia" value="string:TUN">
                              Tunísia
                            </option>
                            <option label="Turcomenistão" value="string:TKM">
                              Turcomenistão
                            </option>
                            <option label="Turquia" value="string:TUR">
                              Turquia
                            </option>
                            <option label="Tuvalu" value="string:TUV">
                              Tuvalu
                            </option>
                            <option label="Ucrânia" value="string:UKR">
                              Ucrânia
                            </option>
                            <option label="Uganda" value="string:UGA">
                              Uganda
                            </option>
                            <option label="Uzbequistão" value="string:UZB">
                              Uzbequistão
                            </option>
                            <option label="Vanuatu" value="string:VUT">
                              Vanuatu
                            </option>
                            <option label="Vaticano" value="string:VAT">
                              Vaticano
                            </option>
                            <option label="Venezuela" value="string:VEN">
                              Venezuela
                            </option>
                            <option label="Vietnã" value="string:VNM">
                              Vietnã
                            </option>
                            <option label="Wallis e Futuna" value="string:WLF">
                              Wallis e Futuna
                            </option>
                            <option label="Zimbábue" value="string:ZWE">
                              Zimbábue
                            </option>
                            <option label="Zâmbia" value="string:ZMB">
                              Zâmbia
                            </option>
                            <option label="África do Sul" value="string:ZAF">
                              África do Sul
                            </option>
                            <option label="Áustria" value="string:AUT">
                              Áustria
                            </option>
                            <option label="Índia" value="string:IND">
                              Índia
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_zip"
                          >
                            CEP:
                            <a
                              className="aph form__label__text text--small ng-binding ng-hide"
                              title="Descubra o seu CEP através do serviço dos Correios"
                              id="address_link_zip"
                            >
                              Não sei meu CEP
                            </a>
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                            type="tel"
                            id="address_zip"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-8">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_street"
                          >
                            Logradouro
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-minlength"
                            type="text"
                            id="address_street"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_number"
                          >
                            Número
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-maxlength"
                            type="text"
                            maxLength={10}
                            id="address_number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-4">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_complement"
                          >
                            Complemento
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-valid ng-empty"
                            type="text"
                            id="address_complement"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_district"
                          >
                            Bairro
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-minlength"
                            type="text"
                            id="address_district"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 ng-hide">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_state"
                          >
                            Estado
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-valid-mask ng-empty ng-valid ng-valid-required"
                            type="text"
                            id="address_state"
                            placeholder="__"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_city"
                          >
                            Cidade
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required"
                            type="text"
                            id="address_city"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <div className="aph form__field">
                          <label
                            className="aph form__label ng-binding"
                            htmlFor="address_phone"
                          >
                            Celular
                          </label>
                          <input
                            className="aph form__control ng-pristine ng-untouched ng-valid ng-valid-mask ng-not-empty ng-valid-required"
                            type="tel"
                            id="address_phone"
                            required
                            placeholder={phone}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="aph m-20-top">
                      <div className="row">
                        <div className="col-xs-6 col-sm-4">
                          <button
                            className="aph btn btn--block ng-binding"
                            type="submit"
                            id="address_submit"
                            data-ng-disabled="addressForm.$invalid"
                            disabled
                          >
                            Salvar
                          </button>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                          <button
                            className="aph btn btn--block btn--bordered ng-binding ng-hide"
                            type="button"
                            id="address_cancel"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="payment__resume">
            <div className="aph container">
              <div className="cart-resume">
                <div
                  className="aph m-60-bot m--60-top m--60-top-xs face-recognition ng-isolate-scope"
                  style={{ marginBottom: "3rem" }}
                >
                  {/* ngIf: faceRecognition */}
                </div>
                <h2 className="aph text ng-binding"> Resumo da compra </h2>
                <p className="cart-resume__text m-top-5">
                  <div className="aph text--dark-grey">
                    {cart.totalItems}{" "}
                    {cart.totalItems === 1 ? "Ingresso" : "Ingressos"}
                  </div>
                  <Link
                    href="/"
                    className="cart-resume__text__tickets-link btn-action ng-binding"
                    id="change_tickets"
                    role="button"
                  >
                    Alterar ingressos
                  </Link>
                </p>
              </div>
            </div>
            <div className="aph container">
              <section className="cart-resume stretch-mob ng-isolate-scope">
                <div className="cart-resume__table-container">
                  <table className="cart-resume__table">
                    <thead className="cart-resume__table__item--mob-hidden">
                      <tr className="cart-resume__table-line cart-resume__table-line--head">
                        <th className="cart-resume__table__item--hidden" />
                        <th className="cart-resume__table__item text--bold ng-binding">
                          INGRESSOS SELECIONADOS
                        </th>
                        <th className="cart-resume__table__item text--bold text--right ng-binding">
                          QTD
                        </th>
                        <th className="cart-resume__table__item text--bold text--right ng-binding">
                          PREÇO
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* ngRepeat: ticket in data.cart */}
                      {cart.items.map((ticket) => (
                        <tr
                          key={ticket.id}
                          className="cart-resume__table-line cart-resume__table-line--body ng-scope"
                          ng-repeat="ticket in data.cart"
                        >
                          <td
                            className="cart-resume__table__item cart-resume__table__item--mob-show ng-binding"
                            valign="top"
                          >
                            {ticket.quantity}
                          </td>
                          <td className="cart-resume__table__item" valign="top">
                            <div className="ng-binding">
                              {ticket.title} - {ticket.titleSector}
                            </div>
                            {/* ngIf: ticket.sector || ticket.name !== 'Inteira' */}
                            <div
                              className="cart-resume__table__item__detail text--dark-grey ng-binding ng-scope"
                              ng-if="ticket.sector || ticket.name !== 'Inteira'"
                            >
                              {/* ngIf: ticket.sector */} Individual.
                            </div>
                            {/* end ngIf: ticket.sector || ticket.name !== 'Inteira' */}
                            <div
                              className="cart-resume__table__item__sessions"
                              data-ng-class="{
                      'has-passkey': ticket.hidden,
                   }"
                            >
                              <div
                                data-ng-show="ticket.dates.length > 1 && !visibleDates[ticket.id]"
                                className="ng-hide"
                              >
                                <span
                                  style={{ textTransform: "uppercase" }}
                                  className="label ng-binding"
                                >
                                  {moment(ticket.date)
                                    .locale("es")
                                    .format("dddd")}
                                </span>
                                <br className="visible-xs" />
                                <button
                                  className="aph link text-sm ng-binding"
                                  type="button"
                                  data-ng-click="(visibleDates[ticket.id] = !visibleDates[ticket.id]);"
                                >
                                  VER DATAS
                                </button>
                              </div>
                              <div
                                className="aph selector selector--xs"
                                data-ng-show="ticket.dates.length === 1 || visibleDates[ticket.id]"
                                data-ng-class="{
                          'has-passkey': ticket.hidden,
                       }"
                              >
                                {/* ngRepeat: session in ticket.dates */}
                                <span
                                  data-ng-repeat="session in ticket.dates"
                                  className="aph selector__label ng-binding ng-scope"
                                >
                                  <span
                                    style={{ textTransform: "uppercase" }}
                                    className="aph selector__label__prefix ng-binding"
                                  >
                                    {moment(ticket.date)
                                      .locale("pt-br")
                                      .format("ddd")}
                                  </span>
                                  {moment(ticket.date).format("DD/MM - HH:mm")}
                                </span>
                                {/* end ngRepeat: session in ticket.dates */}
                              </div>
                              {/* ngIf: ticket.hidden */}
                            </div>
                          </td>
                          <td
                            className="cart-resume__table__item cart-resume__table__item--mob-hidden text--right ng-binding"
                            valign="top"
                          >
                            {ticket.quantity}
                          </td>
                          <td
                            className="cart-resume__table__item text--right"
                            valign="top"
                          >
                            {/* ngIf: !ticket.price && !ticket.tax */}
                            {/* ngIf: ticket.price || ticket.tax */}
                            <div
                              data-ng-if="ticket.price || ticket.tax"
                              className="ng-binding ng-scope"
                            >
                              R$&nbsp;200,00 {/* ngIf: ticket.tax > 0 */}
                              <div
                                className="cart-resume__table__item__detail text--dark-grey ng-binding ng-scope"
                                ng-style="data.clicktopayVisaDiscount && { 'text-decoration': 'line-through' }"
                                ng-if="ticket.tax > 0"
                              >
                                Taxa: R$&nbsp;0,00
                              </div>
                              {/* end ngIf: ticket.tax > 0 */}
                            </div>
                            {/* end ngIf: ticket.price || ticket.tax */}
                          </td>
                        </tr>
                      ))}
                      {/* end ngRepeat: ticket in data.cart */}
                      {/* Extras Directive */}
                      <tr
                        data-ng-show="data && data.extras.length"
                        className="cart-resume__table-line cart-resume__table-line--body ng-hide"
                      >
                        <td colSpan={4}>
                          <div
                            className="extras-resume ng-isolate-scope"
                            data-extras="data.extras"
                            data-enable-remove-button="enableRemoveButton"
                          >
                            <p className="aph text--bold p-20-hor p-10-top p-5-bot hidden-xs extras-resume__title ng-binding">
                              EXTRAS
                            </p>
                            {/* ngRepeat: extra in extras */}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot> </tfoot>
                  </table>
                  <table className="cart-resume__table">
                    <tbody>
                      {/* ngIf: data.totalPrice >= 0 */}
                      <tr
                        className="cart-resume__table-line cart-resume__table-line--footer ng-scope"
                        ng-if="data.totalPrice >= 0"
                      >
                        <td
                          className="cart-resume__table__item text--bold text--dark-grey"
                          colSpan={2}
                          valign="top"
                        >
                          <span className="cart-resume__table__item--mob-hidden ng-binding">
                            TOTAL EM INGRESSOS
                          </span>
                          <span className="cart-resume__table__item--mob-show ng-binding">
                            INGRESSOS
                          </span>
                        </td>
                        <td
                          className="cart-resume__table__item text--right ng-binding"
                          valign="top"
                        >
                          {formatPriceBRL(cart.totalPrice)}
                        </td>
                      </tr>
                      {/* end ngIf: data.totalPrice >= 0 */}
                      {/* ngIf: data.totalPrice >= 0 */}
                      <tr
                        className="cart-resume__table-line cart-resume__table-line--footer ng-scope ng-hide"
                        ng-if="data.totalPrice >= 0"
                        data-ng-show="data.discountOnly"
                      >
                        <td
                          className="cart-resume__table__item text--bold text--dark-grey"
                          colSpan={2}
                          valign="top"
                        >
                          <span className="ng-binding">
                            CUPOM DE DESCONTO ()
                          </span>
                        </td>
                        <td
                          className="cart-resume__table__item text--right ng-binding"
                          valign="top"
                        >
                          - R$&nbsp;0,00
                        </td>
                      </tr>
                      {/* end ngIf: data.totalPrice >= 0 */}
                      {/* ngIf: data.totalTax > 0 && !data.clicktopayVisaDiscount */}
                      <tr
                        className="cart-resume__table-line cart-resume__table-line--footer ng-scope"
                        ng-if="data.totalTax > 0 && !data.clicktopayVisaDiscount"
                      >
                        <td
                          className="cart-resume__table__item text--bold text--dark-grey ng-binding"
                          colSpan={2}
                          valign="top"
                        >
                          TAXA DE SERVIÇO
                        </td>
                        <td
                          className="cart-resume__table__item text--right ng-binding"
                          valign="top"
                        >
                          R$&nbsp;10,00
                        </td>
                      </tr>
                      {/* end ngIf: data.totalTax > 0 && !data.clicktopayVisaDiscount */}
                      {/* ngIf: data.installments.taxValue > 0 && !data.clicktopayVisaDiscount */}
                      <tr
                        className="cart-resume__table-line cart-resume__table-line--footer ng-scope"
                        ng-if="data.installments.taxValue > 0 && !data.clicktopayVisaDiscount"
                      >
                        <td
                          className="cart-resume__table__item text--bold text--dark-grey ng-binding"
                          colSpan={2}
                          valign="top"
                        >
                          <span className="aph hidden-xs ng-binding">
                            TAXA DE{" "}
                          </span>
                          PROCESSAMENTO {/* ngIf: hasInterest */}
                          <button
                            className="cart-resume__table__item__btn"
                            data-ng-click="toggleTaxesDialog(true);"
                            title="Entenda melhor"
                          >
                            i
                          </button>
                        </td>
                        <td
                          className="cart-resume__table__item text--right ng-binding"
                          valign="top"
                        >
                          R$&nbsp;6,75
                        </td>
                      </tr>
                      {/* end ngIf: data.installments.taxValue > 0 && !data.clicktopayVisaDiscount */}
                      <tr className="cart-resume__table-line cart-resume__table-line--footer">
                        <td
                          className="cart-resume__table__item text--bold ng-binding"
                          colSpan={2}
                          valign="top"
                        >
                          TOTAL
                          {/* ngIf: data.transaction.status == 'approved' */}
                          {/* ngIf: data.transaction.status != 'approved' */}
                          <span
                            ng-if="data.transaction.status != 'approved'"
                            className="ng-binding ng-scope"
                          >
                            {" "}
                            A PAGAR
                          </span>
                          {/* end ngIf: data.transaction.status != 'approved' */}
                        </td>
                        <td
                          className="cart-resume__table__item text--right"
                          valign="top"
                          ng-class="{'cart-resume__table__item--installments': data.installments.quantity > 1}"
                        >
                          <div
                            className="cart-resume__table__item__price text--bold"
                            data-ng-class="{
                              'aph m-5-ver': !data.installments.total
                           }"
                          >
                            <div
                              data-ng-if="data.installments.total && !data.clicktopayVisaDiscount"
                              className="ng-binding ng-scope"
                            >
                              {formatPriceBRL(cart.totalPrice + 10 + 6.75)}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <dialog className="dialog">
                    <div className="dialog__box">
                      <h2 className="dialog__title ng-binding">
                        Taxa de Processamento
                      </h2>
                      {/* ngIf: !hasInterest */}
                      <div
                        className="dialog__content aph text-center ng-scope"
                        data-ng-if="!hasInterest"
                      >
                        <p className="dialog__content__text ng-binding">
                          A Taxa de Processamento é o custo que será repassado
                          ao serviço de transação online para viabilizar o
                          pagamento.
                        </p>
                      </div>
                      {/* end ngIf: !hasInterest */} {/* ngIf: hasInterest */}
                      <div className="dialog__action">
                        <button
                          type="button"
                          className="aph btn ng-binding"
                          data-ng-click="toggleTaxesDialog(false);"
                        >
                          Entendi
                        </button>
                      </div>
                    </div>
                  </dialog>
                </div>
              </section>
            </div>
          </section>
          <section
            className="payment__summary"
            data-ng-show="(data.paymentType.type !== TYPES.AME) && (data.paymentType.type !== TYPES.PICPAY)"
          >
            <div className="aph container">
              <div className="summary">
                <div className="row middle-xs center-xs">
                  <div className="col-xs-12 col-sm-6 first-xs last-sm">
                    <div className="summary__action">
                      <button
                        className="aph btn btn--green btn--block con-pay"
                        type="button"
                        id="payment_pay"
                        onClick={createPayment}
                        disabled={false}
                      >
                        <div
                          className="row middle-xs ng-isolate-scope"
                          data-text="Pagar"
                        >
                          <div className="col-xs-7">
                            <div className="text-left ng-binding">Pagar</div>
                          </div>
                          <div className="col-xs-5">
                            <div className="text-right">
                              <div
                                className="coupon__total ng-hide"
                                ng-show="data.totalDiscount"
                              >
                                <span className="ng-binding">
                                  {formatPriceBRL(cart.totalPrice)}
                                </span>
                              </div>
                              <div className="coupon__discount ng-binding">
                                {formatPriceBRL(cart.totalPrice + 10 + 6.75)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="summary__certificate aph p-20-top-xs">
                      <Image
                        width={195}
                        height={42}
                        className="summary__certificate__image"
                        alt="Esta aplicação possui certificado de segurança"
                        src={certificate}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

const teste = {
  date: "2024-07-06 14:02:02",
  success: true,
  error: false,
  type: "invoice",
  api: {
    by: "FULLPROG.com - Criando Soluções para sua empresa",
    version: "1.7",
    updated: "2024-06-02",
  },
  tipo: "invoice",
  fatura: {
    moeda: "BRL",
    id: "172028532217195125800",
    uuid: 459616,
    invoice_id: "E2B65979D2704F44A17D4D9E48D3B1AC",
    token: null,
    cartao: { tid: null, token: null, bin: null, numero: null, bandeira: null },
    criacao: "2024-07-06 14:02:01",
    vencimento: { dia: "2024-12-28", original: "2024-12-28" },
    assinatura: { id: null },
    secure: {
      id: "e2b65979-d270-4f44-a17d-4d9e48d3b1ac-dcb2",
      url: "https://faturas.iugu.com/e2b65979-d270-4f44-a17d-4d9e48d3b1ac-dcb2",
    },
    parcelas: "1",
    produtos: [[Object]],
    cliente: { id: "452769" },
    externo: {
      url: "https://faturas.iugu.com/e2b65979-d270-4f44-a17d-4d9e48d3b1ac-dcb2",
      fatura:
        "https://faturas.iugu.com/e2b65979-d270-4f44-a17d-4d9e48d3b1ac-dcb2",
      bankSlipUrl:
        "https://faturas.iugu.com/e2b65979-d270-4f44-a17d-4d9e48d3b1ac-dcb2",
    },
    valores: {
      bruto: 400,
      liquido: 400,
      original: 400,
      juros: null,
      desconto: 0,
      taxas: null,
    },
    pix: {
      image:
        "https://faturas.iugu.com/qr_code/e2b65979-d270-4f44-a17d-4d9e48d3b1ac-dcb2",
      payload:
        "00020101021226840014br.gov.bcb.pix2562qr.iugu.com/public/payload/v2/E2B65979D2704F44A17D4D9E48D3B1AC52040000530398654044.005802BR5908STARBANK6009SAO PAULO62070503***63045C2E",
      status: "qr_code_created",
      ete: [Object],
    },
    billet: null,
    status: {
      text: "pending",
      sub_text: "pending",
      code: 1,
      title: "Aguardando Pagamento",
      description:
        "No momento, estamos aguardando o processamento do pagamento. Isso costuma ser rápido, porém, pode levar até 48 horas.",
    },
    pagamento: { total: null, taxas: null, datas: [Object] },
    nossoNumero: "TEST13",
    referencia: "TEST13",
    split: { id: "BAAE90F5C75D4CFB9D04F27C6E4B7461", rules: [Array] },
    refunds: { possbile: null, total: 0, brl: "R$ 0,00", data: null },
  },
};
