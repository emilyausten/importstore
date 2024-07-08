import Link from "next/link";
import useCart from "../../hooks/useCart";
import { formatPriceBRL } from "../../utils/currency";

export default function FooterCart() {
  const { cart } = useCart();
  return (
    <footer className="status-bar ng-isolate-scope status-bar--active">
      <div className="content">
        <div className="row middle-xs">
          <div className="col-xs-7 col-sm-8 col-md-9">
            <div className="status-bar__quantity text-grey">
              <div
                data-count="data.totalTickets"
                data-when="{
                      'one'  : &quot;{} ingresso&quot;,
                      'other': &quot;{} ingressos&quot;
                  }"
              >
                {cart.totalItems === 1
                  ? "1 ingresso"
                  : `${cart.totalItems} ingressos`}
              </div>
            </div>
            <div className="status-bar__price">
              <div
                data-ng-if="data.totalPrice"
                className="ng-binding ng-scope"
                style={{}}
              >
                {formatPriceBRL(cart.totalPrice)}
              </div>
            </div>
          </div>
          <div className="col-xs-5 col-sm-4 col-md-3">
            <Link
              href="/identification"
              className="aph btn btn--block ng-binding"
              id="buy_btn"
              type="button"
            >
              Avançar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
