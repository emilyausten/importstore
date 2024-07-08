"use client";
import { useState } from "react";
import Sector from "./Sector";
import { DayEvent } from "../../../constants/data";
import useCart from "../../../hooks/useCart";

interface DayItemProps {
  day: DayEvent;
}

export default function DayItem({ day }: DayItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const { cart } = useCart();
  return (
    <div className="segment segment--o-h">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="segment__header"
        id="session__btn_0"
        type="button"
      >
        <div className="row middle-xs">
          <div className="col-xs-8">
            <div className="segment__header__text text-sm ng-binding ng-scope">
              {day.date}
            </div>
            <div
              style={{ textTransform: "capitalize" }}
              className="segment__header__title text-lg ng-binding ng-scope"
            >
              {day.title}
            </div>
          </div>
          <div className="col-xs-4">
            <div className="session__status text-right">
              <div
                className={`segment__header__toggle ng-scope ${
                  isOpen ? "segment__header__toggle--opened" : ""
                }  transition-all`}
              >
                {cart.totalItems > 0 && (
                  <div
                    className="segment__header__count ng-binding ng-scope"
                    data-ng-if="session.selected"
                    data-ng-bind="session.selected | number"
                    style={{}}
                  >
                    {cart.totalItems}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <>
          {day.sectors.map((sector) => (
            <Sector key={sector.title} sector={sector} />
          ))}
        </>
      )}
    </div>
  );
}
