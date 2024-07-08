import { CiLock } from "react-icons/ci";

export default function Cupon() {
  return (
    <div className="outdoor-content__next">
      <div className="sessions ng-scope">
        {/* ngIf: !!brand */}
        {/* ngIf: !hasMembershipTickets && !event.isPasskeyDisabled */}
        <div className="ng-scope"></div>
        {/* end ngIf: !hasMembershipTickets && !event.isPasskeyDisabled */}
        <div className="row start-xs place-map-wrapper">
          {/* ngIf: event.startImagePlace */}
          <div className="col-xs-12 col-sm-12">
            <div className="aph m-40-bot m--15-top m--5-top-xs face-recognition ng-isolate-scope"></div>
            {/* ngIf: event.hasFootballMembership */}
            <div>
              <div>
                <div className="">
                  <div
                    className="hide-xs"
                    data-ng-show="!event.hasFootballMembership"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1.5rem",
                    }}
                  >
                    <p
                      style={{ fontWeight: 600, marginTop: 10 }}
                      className="ng-binding"
                    >
                      Cupom de desconto
                    </p>
                    <div
                      style={{
                        height: 60,
                        width: "55%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <input
                        className="aph form__control ng-pristine ng-untouched ng-valid ng-empty"
                        type="text"
                        disabled
                        placeholder="Respeite maiúsculas e minúsculas"
                      />
                      <div className="aph form__helper text-red ng-binding ng-hide" />
                      <span className="aph form__helper text-orange ng-binding ng-hide">
                        {" "}
                        Esse evento não possui cupons de desconto
                      </span>
                    </div>
                    <button className="coupon_neutral_button cursor-not-allowed">
                      {" "}
                      <span className="ng-binding">APLICAR</span>{" "}
                    </button>
                  </div>
                </div>
                {/* Coupon Mobile View */}
                <div data-ng-show="currencySelected === 'BRL'" className="">
                  <div
                    className="visible-xs"
                    style={{ margin: "1.5rem 0", textAlign: "center" }}
                  >
                    <p
                      style={{ fontWeight: 600, marginTop: 10 }}
                      className="ng-binding"
                    >
                      Cupom de desconto{/* Cupom de desconto */}
                    </p>
                    <div
                      style={{
                        height: 60,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <input
                        className="aph form__control ng-pristine ng-untouched ng-valid ng-empty"
                        type="text"
                        disabled
                        placeholder="Respeite maiúsculas e minúsculas"
                      />
                      <div className="aph form__helper text-red ng-binding ng-hide" />
                      <span className="aph form__helper text-orange ng-binding ng-hide">
                        Esse evento não possui cupons de desconto
                      </span>
                    </div>
                    <button
                      style={{
                        marginTop: "1rem",
                        cursor: "not-allowed !important",
                      }}
                      className="coupon_neutral_button !cursor-not-allowed"
                    >
                      {" "}
                      <span className="ng-binding">APLICAR</span>{" "}
                    </button>
                  </div>
                </div>
                {/* limit_ticket_warning */}
                <div className="row middle-xs end-xs">
                  {/* ngIf: event.showSessionButton */}
                  {/* ngIf: hasStartImage */}
                  <div className="col-xs-6 col-sm-6 last-xs">
                    {/* ngIf: !cart.nopasskey && !hasMembershipTickets */}
                    <div
                      data-ng-if="!cart.nopasskey && !hasMembershipTickets"
                      className="sessions__toggle text-right ng-scope"
                    >
                      <button
                        className="btn-clear sessions__toggle__btn sessions__toggle__btn--passkey sessions__toggle__btn--passkey--lock text-uppercase text-blue ng-scope ng-binding"
                        type="button"
                        id="passkey_btn"
                      >
                        <div className="flex items-center gap-1">
                          <CiLock size={16} />
                          {/* ngIf: !cart.passkey */}
                          <span className="ng-binding ng-scope">
                            Utilizar código
                          </span>
                        </div>
                      </button>
                    </div>
                    {/* end ngIf: !cart.nopasskey && !hasMembershipTickets */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
