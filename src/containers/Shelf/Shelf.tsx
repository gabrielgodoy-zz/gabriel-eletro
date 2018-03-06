import * as React from 'react';
import css from 'styled-jsx/css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShelfCounter from '../../components/ShelfCounter/ShelfCounter';
import { enableEditMode, disableEditMode } from './../../ducks/editMode';
import Product from '../../components/Product/Product';

interface ShelfProps {
  editMode: boolean;
  products: Product[];
}

interface ShelfState {
  productsNumber: number;
}

export class Shelf extends React.Component<ShelfProps, ShelfState> {
  constructor(props) {
    super(props);
    this.state = {
      productsNumber: 5,
    };

    this.changeProductsNumber = this.changeProductsNumber.bind(this);
  }

  public changeProductsNumber(action) {
    const isToDecrease = action === 'decrease';
    const { productsNumber } = this.state;
    const isMinimum = productsNumber === 1;
    const isMaximum = productsNumber === 5;
    const reachedLimit = (isToDecrease && isMinimum) || (!isToDecrease && isMaximum);

    if (!reachedLimit) {
      this.setState({
        productsNumber: isToDecrease ? productsNumber - 1 : productsNumber + 1,
      });
    }
  }

  public render() {
    const isProductsFull = this.props.editMode ? '' : 'products-full';

    return (
      <div className={`shelf-container ${isProductsFull} shelf-container-full relative flex items-center`}>
        <div className="shelf absolute bottom-0">
          <div className="bookend_left db absolute" />
          <div className="bookend_right db absolute" />
          <div className="reflection" />
        </div>

        <div className="products items-end flex relative justify-around">
          {this.props.products.length ? (
            this.props.products.map(
              (product, index) =>
                index < this.state.productsNumber && <Product key={product.id} details={product} />,
            )
          ) : (
            <p className="user-feedback self-center">Carregando produtos...</p>
          )}
        </div>

        {this.props.editMode && (
          <ShelfCounter
            counter={this.state.productsNumber}
            changeProductsNumber={this.changeProductsNumber}
          />
        )}

        <style jsx>
          {`
            .products {
              min-height: 300px;
              z-index: 9;
              width: 90%;
            }

            .products-full {
              width: 100%;
            }

            .shelf-container {
              margin-bottom: 90px;
            }

            .shelf {
              width: 90%;
              height: 20px;
              margin: 180px auto 110px;
              background-image: linear-gradient(90deg, #d1d8de 0%, #eff1f3 100%);
              box-shadow: 0 2px 2px #708698, 0 4px 0 #abb8c3, 0 20px 30px -8px #000000,
                transparent 0 0 0, transparent 0 0 0, transparent 0 0 0;
            }

            .products-full .shelf,
            .products-full .products {
              width: 100%;
            }

            .bookend_left {
              left: -25px;
              top: -18px;
              width: 36px;
              height: 36px;
              background-color: #fff;
              transform: rotate(35deg);
            }

            .bookend_right {
              right: -25px;
              top: -18px;
              width: 36px;
              height: 36px;
              background-color: #fff;
              transform: rotate(-35deg);
            }

            .reflection {
              top: 20px;
              left: 1px;
              width: 99.8%;
              height: 1px;
              background-image: -ms-linear-gradient(
                0deg,
                #ffffff 0%,
                rgba(255, 255, 255, 0.5) 35%,
                #ffffff 65%,
                rgba(255, 255, 255, 0.7) 100%
              );
            }
          `}
        </style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editMode: state.editMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ enableEditMode, disableEditMode }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shelf);
