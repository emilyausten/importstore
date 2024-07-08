'use client'

import { useMemo, useState } from "react";
import TicketItem from "./TicketItem";
import { Ticket } from "../../../../constants/data";
import useCart from "../../../../hooks/useCart";

interface SectorProps {
  sector: {
    title: string;
    tickets: Ticket[];
  };
}

export default function Place({ sector }: SectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const expandedCartItems: Ticket[] = useMemo(() => {
    return cart.items.flatMap((item) => Array(item.quantity).fill(item));
  }, [cart]);

  const totalItemsExpandedCartItems = useMemo(() => {
    return expandedCartItems.filter((item) => item.titleSector === sector.title)
      .length;
  }, [expandedCartItems, sector, cart]);

  return (
    <div className="segment__children ng-isolate-scope">
      <div className="segment__children__content" id="session_groups_104829">
        {/* ngRepeat: group in session.groups track by $index */}
        <div className="ng-scope ng-isolate-scope">
          <div id="group1087551" className="group ng-isolate-scope">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="group_btn_00"
              className="segment__header group_btn_count"
              type="button"
            >
              <div className="row middle-xs">
                <div className="col-xs-9">
                  <div className="segment__header__title group__title text-md ng-binding">
                    {sector.title}
                  </div>
                </div>
                <div className="col-xs-3">
                  <div className="group__status session__status text-right">
                    <div
                      className={`segment__header__toggle ng-scope ${
                        isOpen ? "segment__header__toggle--opened" : ""
                      }`}
                    >
                      {totalItemsExpandedCartItems > 0 && (
                        <div className="segment__header__count ng-binding ng-scope">
                          {totalItemsExpandedCartItems}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
            {isOpen && (
              <div className="segment__children ng-isolate-scope">
                <div
                  className="segment__children__content"
                  id="group_tickets_1087551"
                >
                  {sector.tickets.map((ticket) => (
                    <TicketItem key={ticket.id} ticket={ticket} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
