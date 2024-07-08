import toast from "react-hot-toast";
import { Ticket } from "../../constants/data";
import moment from "moment";
import "moment/locale/pt-br";

interface NameTicketItemProps {
  ticket: Ticket;
}

export default function NameTicketItem({ ticket }: NameTicketItemProps) {
  moment.locale("pt-br");
  return (
    <div className="ng-scope ng-isolate-scope">
      <div className="identify__tickets ng-isolate-scope">
        <div className="identify__tickets__item">
          <div className="identify__tickets__item__info aph flex__item">
            <div className="identify__tickets__title ng-binding">
              {ticket.title}
            </div>
            <div className="identify__tickets__description ng-binding">
              Individual.
            </div>
            <div className="identify__tickets__sessions">
              <span className="aph selector selector--xs ng-scope">
                <span className="aph selector__label ng-binding">
                  <span
                    style={{ textTransform: "uppercase" }}
                    className="aph selector__label__prefix ng-binding uppercase"
                  >
                    {moment(ticket.date).locale("pt-br").format("ddd")}
                  </span>
                  {moment(ticket.date).format("DD/MM - HH:mm")}
                </span>
              </span>
            </div>
          </div>
          <div
            ng-class="holder.faceRecognition ? 'faceRecognition' : holder.ticketIdentified ? holder.ticket.category.name : ''"
            ng-style="holder.picture ? {'padding-top': '0'} : {}"
            className="show-xs"
            style={{
              backgroundColor: "#f8f8f8",
              marginTop: "-10px",
            }}
          >
            <div className="identify__tickets__item__actions aph flex__item">
              <div className="row middle-xs ng-scope">
                <div className="col-xs-6 col-sm-12">
                  <button
                    className="!text-white !bg-[#00a5db] !cursor-default aph btn btn--block btn--bordered btn--sm hide-xs ng-binding ng-scope"
                    type="button"
                    id="identify_btn_mine"
                    style={{
                      width: 160,
                      backgroundColor: "#00a5db",
                      color: "#fff",
                    }}
                  >
                    MEU INGRESSO
                  </button>
                  <button
                    className="aph btn btn--block btn--bordered show-xs ng-binding ng-scope"
                    type="button"
                    id="identify_btn_mine_xs"
                    style={{
                      fontSize: 14,
                      backgroundColor: "#00a5db",
                      color: "#fff",
                    }}
                  >
                    MEU INGRESSO
                  </button>
                </div>
                <div className="col-xs-6 col-sm-12">
                  <button
                    className="aph btn btn--block btn--bordered btn--sm hide-xs ng-binding opacity-30 !cursor-not-allowed"
                    onClick={() => {
                      toast("Essa opção estará disponivel após o pagamento!", {
                        icon: "⚠️",
                      });
                    }}
                    type="button"
                    id="identify_btn_friend"
                    style={{ width: 160 }}
                  >
                    TRANSFERIR
                  </button>
                  <button
                    onClick={() => {
                      toast("Essa opção estará disponivel após o pagamento!", {
                        icon: "⚠️",
                      });
                    }}
                    className="aph opacity-30 !cursor-not-allowed btn btn--block btn--bordered show-xs ng-binding"
                    type="button"
                    id="identify_btn_friend_xs"
                    style={{ fontSize: 14 }}
                  >
                    TRANSFERIR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hide-xs">
            <div className="identify__tickets__item__actions aph flex__item">
              <div className="row middle-xs ng-scope">
                <div className="col-xs-6 col-sm-12">
                  <button
                    className="!text-white !bg-[#00a5db] !cursor-default aph btn btn--block btn--bordered btn--sm hide-xs ng-binding ng-scope"
                    type="button"
                    id="identify_btn_mine"
                    style={{
                      width: 160,
                      backgroundColor: "#00a5db",
                      color: "#fff",
                    }}
                  >
                    MEU INGRESSO
                  </button>
                  <button
                    className="aph btn btn--block btn--bordered show-xs ng-binding ng-scope"
                    type="button"
                    id="identify_btn_mine_xs"
                    style={{ fontSize: 14 }}
                  >
                    MEU INGRESSO
                  </button>
                </div>
                <div className="col-xs-6 col-sm-12">
                  <button
                    className="aph btn btn--block btn--bordered btn--sm hide-xs ng-binding opacity-30 !cursor-not-allowed"
                    onClick={() => {
                      toast("Essa opção estará disponivel após o pagamento!", {
                        icon: "⚠️",
                      });
                    }}
                    type="button"
                    id="identify_btn_friend"
                    style={{ width: 160 }}
                  >
                    TRANSFERIR
                  </button>
                  <button
                    className="aph btn btn--block btn--bordered show-xs ng-binding"
                    type="button"
                    id="identify_btn_friend_xs"
                    style={{ fontSize: 14 }}
                  >
                    TRANSFERIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
