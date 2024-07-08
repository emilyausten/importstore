"use client";
import Header from "../../src/components/Ticket/Header";
import StepBreadcump from "../../src/components/Ticket/StepBreadcump";
import brazil from "../../src/assets/images/brazil.svg";
import arrow from "../../src/assets/images/arrow.svg";
import Link from "next/link";
import "../../src/styles/ingresse.css";
import InputMask from "react-input-mask";
import useClient from "../../src/hooks/useClient";
import Image from "next/image";

export default function Identification() {
  const { email, setEmail, name, phone, setName, setPhone } = useClient();

  return (
    <main className="blackout">
      <Header />
      <div className="breadcrumbs ng-scope">
        <StepBreadcump step={2} />
      </div>
      <div id="main-view" className="main-view transition ng-scope">
        <div className="aph flex flex--column flex--stretch auth false">
          <div className="aph flex__item flex__item--start auth__content">
            <div className="aph container xs false">
              <div
                id="authContainer"
                style={{ maxWidth: 300, boxShadow: "none", margin: "0 auto" }}
                className="segment !shadow-none segment--padded-md load unset-overflow segment--no-bs max-w-[300px] mx-auto"
              >
                <div id="authContent" className="segment__content">
                  <div className="segment__content__limited">
                    <div className="choose-language-container">
                      <div className="select-container !mx-auto !w-fit">
                        <div>
                          <div className="selected-option !cursor-pointer flex items-center gap-2 py-5 !mx-auto">
                            <Image
                              src={brazil}
                              width={25}
                              height={25}
                              alt="Português (PT)"
                              className="option-image"
                            />
                            <span className="option-label">Português (PT)</span>
                            <Image
                              src={arrow}
                              width={6}
                              height={9}
                              alt="escolher idioma"
                              style={{
                                rotate: "90deg",
                              }}
                              className="arrow-select"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="aph form">
                      <div className="aph m-10-bot">
                        <label className="aph form__label" htmlFor="email">
                          E-MAIL
                        </label>
                        <input
                          className="aph form__control false"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          name="email"
                          required
                        />
                        {email && !email.includes("@") && email.length > 3 && (
                          <div className="aph form__helper text-red">
                            Preencha com um e-mail válido
                          </div>
                        )}
                      </div>
                      <div className="aph m-10-bot">
                        <label className="aph form__label" htmlFor="name">
                          NOME E SOBRENOME
                        </label>
                        <input
                          className="aph form__control false"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          id="name"
                          name="name"
                          required
                        />
                        {name && name.length < 3 && (
                          <div className="aph form__helper text-red">
                            Preencha com um nome válido
                          </div>
                        )}
                      </div>
                      <div className="aph m-10-bot">
                        <label className="aph form__label" htmlFor="phone">
                          TELEFONE DE CONTATO
                        </label>
                        <InputMask
                          className="aph form__control"
                          mask="(99) 99999-9999"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          id="phone"
                          placeholder="(__) _____-____"
                          name="phone"
                          required
                        >
                          {/* @ts-ignore */}
                          {(inputProps) => (
                            <input {...inputProps} type="text" />
                          )}
                        </InputMask>
                      </div>
                      <div className="aph m-30-ver show-xs" />
                      <Link href="/ingresse-name" className="aph m-20-too ">
                        <button
                          className="aph btn btn--block btn--primary false"
                          type="submit"
                          id="btnLoginSubmit"
                          disabled={!email || name.length < 3 || !phone}
                        >
                          CONTINUAR
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
