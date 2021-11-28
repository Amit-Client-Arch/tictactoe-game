/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import React from 'react';
import './tictactoe.scss';

const TicTacToe = () => {
  return (
    <>
      <div className="app">
        <div className="container-fluid app-container">
          <div className="row app-row">
            <div className="col-xs-4 play-box" id="0">
              <div className="symbol" />
            </div>
            <div className="col-xs-4 play-box" id="1">
              <div className="symbol" />
            </div>
            <div className="col-xs-4 play-box last-right" id="2">
              <div className="symbol" />
            </div>
            <div className="col-xs-4 play-box" id="3">
              <div className="symbol" />
            </div>
            <div className="col-xs-4 play-box" id="4">
              <div className="symbol" />
            </div>
            <div className="col-xs-4 play-box last-right" id="5">
              <div className="symbol" />
            </div>
            <div className="col-xs-4 play-box last-bottom" id="6">
              <div className="symbol" />
            </div>
            <div className="col-xs-4 play-box last-bottom" id="7">
              <div className="symbol" />
            </div>
            <div
              className="col-xs-4 play-box last-right last-bottom"
              id="8"
            >
              <div className="symbol" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade app-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
      >
        <div className="modal-dialog modal-size">
          <div className="modal-content">
            <h3 className="content heading">Warning!!!</h3>
            <hr className="warning-hr" />
            <div className="content body">
              Please save your time and don&apost even think
              you&aposre smart.
              <br />
              <strong>
                <em>I&aposM SMARTER THAN YOU! HA-HA-HA!!!</em>
              </strong>
              <br />
              Wana try me? Chose :
              <br />
              <div className="center-block symbol-options">
                <button
                  className="symbol-option btn btn-default btn-md"
                  data-dismiss="modal"
                  type="button"
                >
                  X
                </button>
                OR
                <button
                  className="symbol-option btn btn-default btn-md"
                  data-dismiss="modal"
                  type="button"
                >
                  O
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
