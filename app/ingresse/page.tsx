'use client'
import React from "react";
import Header from "../../src/components/Ticket/Header";
import Cupon from "../../src/components/Ticket/Cupon";
import "../../src/styles/ingresse.css";
import StepBreadcump from "../../src/components/Ticket/StepBreadcump";
import List from "../../src/components/Ticket/List";
import FooterCart from "../../src/components/Ticket/FooterCart";
import useCart from "../../src/hooks/useCart";


export default function Ingresse() {
  const { cart } = useCart();
  return (
    <main className="blackout">
      <Header />
      <div className="breadcrumbs ng-scope">
        <StepBreadcump step={1} />
      </div>
      <div id="main-view" className="main-view transition ng-scope" style={{}}>
        <div className="outdoor-content ng-scope ng-isolate-scope">
          <div className="content">
            <Cupon />
            <List />
          </div>
        </div>
      </div>
      {cart.totalItems > 0 && <FooterCart />}
    </main>
  );
}
