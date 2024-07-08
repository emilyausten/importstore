"use client";
import Header from "../../src/components/Ticket/Header";
import StepBreadcump from "../../src/components/Ticket/StepBreadcump";
import "../../src/styles/ingresse.css";
import Link from "next/link";
import NameTicketItem from "../../src/components/NameTicket/NameTicketItem";
import useCart from "../../src/hooks/useCart";
import { Ticket } from "../../src/constants/data";
import { Toaster } from "react-hot-toast";

export default function NameIngresse() {
  const { cart } = useCart();

  const expandedCartItems = cart.items.flatMap((item) =>
    Array(item.quantity).fill(item)
  );

  return (
    <main className="blackout">
      <Toaster />
      <Header />
      <div className="breadcrumbs ng-scope">
        <StepBreadcump step={3} />
      </div>
      <div id="main-view" className="main-view transition ng-scope">
        <div
          className="aph container ng-scope"
          style={{ marginBottom: "3rem" }}
        >
          <div className="page-header">
            <h1
              className="page-header__title ng-binding"
              style={{ marginTop: 50 }}
            >
              DE QUEM SÃO OS INGRESSOS?
            </h1>
            <h2
              className="page-header__subtitle ng-binding"
              style={{ display: "block", marginTop: 25, marginBottom: 50 }}
            >
              Se o ingresso for seu, clique em "Meu ingresso", caso contrário,
              clique em "Transferir"
            </h2>
          </div>
          <div className="identify">
            <div className="stretch-xs">
              <div className="carousel ng-isolate-scope">
                <div className="carousel__content" id="carousel_">
                  {expandedCartItems.map((item: Ticket) => (
                    <NameTicketItem key={item.id} ticket={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center identify__btn">
              <select
                name="select-dependent"
                id="select-dependent"
                className="ng-pristine ng-untouched ng-valid ng-empty"
                style={{ display: "none" }}
              >
                <option value="" className="ng-binding">
                  Recuperando Dependentes...
                </option>
              </select>
              <span
                className="identify__select__dependent_error_message"
                style={{ display: "none" }}
              >
                Dependente já associado a outro ingresso para este evento,
                selecione outro dependente.
              </span>
              <Link
                href="/payment"
                className="aph btn btn--sm btn--orange identify__btn__continue ng-binding ng-scope"
                id="identify_btn_continue"
                type="button"
              >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
