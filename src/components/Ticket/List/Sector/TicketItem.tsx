import { RxMinusCircled, RxPlusCircled } from "react-icons/rx";
import { Ticket } from "../../../../constants/data";
import { formatPriceBRL } from "../../../../utils/currency";
import useCart from "../../../../hooks/useCart";

interface TicketItemProps {
  ticket: Ticket;
}

export default function TicketItem({ ticket }: TicketItemProps) {
  const { addTicket, removeTicket, cart } = useCart();

  // Encontre o item do carrinho correspondente ao ticket atual
  const cartItem = cart.items.find((item) => item.id === ticket.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="ng-scope ng-isolate-scope ticket_details">
      <div className="segment__children__item ticket ng-isolate-scope">
        <div className="aph visible-xs">
          <div className="ticket__title ng-binding">{ticket.title}</div>
          <div className="row middle-xs">
            <div className="col-xs-8">
              <div className="ticket__values">
                <div className="ng-binding ng-scope">
                  {formatPriceBRL(ticket.price)}
                </div>
              </div>
            </div>
            <div className="col-xs-4 text-right">
              <div className="ng-scope">
                <div className="actions ng-isolate-scope ">
                  <div className="actions__selector">
                    {quantity > 0 && (
                      <button
                        onClick={() => {
                          removeTicket(String(ticket.id));
                        }}
                        type="button"
                        id="ticket_remove-000_xs"
                        className="actions__selector__btn"
                      >
                        <RxMinusCircled size={26} />
                      </button>
                    )}
                    <span className="actions__selector__quantity ng-binding">
                      {quantity}
                    </span>
                    <button
                      onClick={() => addTicket(ticket)}
                      type="button"
                      id="ticket_add-000_xs"
                      className="actions__selector__btn"
                    >
                      <RxPlusCircled size={26} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aph hide-xs">
          <div className="row middle-sm">
            <div className="col-sm-9 col-md-9">
              <div className="ticket__info">
                <div className="ticket__title ng-binding">{ticket.title}</div>
                <div className="ticket__values">
                  <div className="ng-binding ng-scope">
                    {formatPriceBRL(ticket.price)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 text-right col-md-3">
              <div className="ng-scope">
                <div
                  className="actions ng-isolate-scope "
                  id="ticket-selector-1087573-desktop"
                >
                  <div className="actions__selector">
                    {quantity > 0 && (
                      <button
                        onClick={() => {
                          removeTicket(String(ticket.id));
                        }}
                        type="button"
                        id="ticket_remove-000"
                        title="Remover"
                        className="actions__selector__btn"
                      >
                        <RxMinusCircled size={26} />
                      </button>
                    )}
                    <span className="actions__selector__quantity ng-binding">
                      {quantity}
                    </span>
                    <button
                      onClick={() => addTicket(ticket)}
                      type="button"
                      id="ticket_add-000"
                      title="Adicionar"
                      className="actions__selector__btn"
                    >
                      <RxPlusCircled size={26} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket__isnt-transferable"></div>
      </div>
    </div>
  );
}
