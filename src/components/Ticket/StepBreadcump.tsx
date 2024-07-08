import Link from "next/link";
import useCart from "../../hooks/useCart";

interface StepBreadcumpProps {
  step: number;
}

export default function StepBreadcump({ step }: StepBreadcumpProps) {
  const { cart } = useCart();
  return (
    <div className="aph container">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__list__item ng-scope">
          <Link
            href="/"
            className={`breadcrumbs__list__item__link ${
              step === 1 ? "active" : ""
            }`}
            id="step-0"
          >
            <span className="show__mob-inline ng-binding">
              {step === 1 ? "Ingressos" : "1"}{" "}
            </span>
            <span className="hide-xs ng-binding">Ingressos</span>
          </Link>
        </li>
        <li className="breadcrumbs__list__item ng-scope">
          <Link
            href={cart.totalItems > 0 ? "/identification" : "#"}
            className={`breadcrumbs__list__item__link ${
              step === 2 ? "active" : ""
            }`}
            id="step-2"
          >
            <span className="show__mob-inline ng-binding">
              {step === 2 ? "Intentificação" : "2"}{" "}
            </span>
            <span className="hide-xs ng-binding">Intentificação</span>
          </Link>
        </li>
        <li className="breadcrumbs__list__item ng-scope">
          <Link
            href={cart.totalItems > 0 ? "/ingresse-name" : "#"}
            className={`breadcrumbs__list__item__link ${
              step === 3 ? "active" : ""
            }`}
            id="step-3"
          >
            <span className="show__mob-inline ng-binding">
              {step === 3 ? "Nomear Ingressos" : "3"}{" "}
            </span>
            <span className="hide-xs ng-binding">Nomear Ingressos</span>
          </Link>
        </li>
        <li className="breadcrumbs__list__item ng-scope">
          <Link
            href={cart.totalItems > 0 ? "/payment" : "#"}
            className={`breadcrumbs__list__item__link ${
              step === 4 ? "active" : ""
            }`}
            id="step-4"
          >
            <span className="show__mob-inline ng-binding">
              {step === 4 ? " Pagamento" : "4"}{" "}
            </span>
            <span className="hide-xs ng-binding">Pagamento</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
