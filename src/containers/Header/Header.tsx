import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enableEditMode, disableEditMode } from './../../ducks/editMode';
import * as classnames from 'classnames';
import Link from 'next/link';

interface HeaderActions {
  enableEditMode: any;
  disableEditMode: any;
}

interface HeaderProps {
  editMode: boolean;
  actions: HeaderActions;
}

export class Header extends React.Component<HeaderProps, undefined> {
  public render() {
    const { actions, editMode } = this.props;
    return (
      <div className="row header pt4">
        <Link href="/">
          <a className="logo-link">
            <img className="logo relative pl3 pr3 center db" src="https://goo.gl/z41qMC" />
          </a>
        </Link>

        <div
          className="button-edition-mode tc white pointer"
          onClick={() => editMode ? actions.disableEditMode() : actions.enableEditMode()}
        >
          {editMode ? 'Sair' : 'Entrar'} do modo de edição
        </div>

        <div className="pt4 pb4 pl3 pr3 nav-bar custom-gradient-yellow" />

        <style jsx>
          {`
            .header {
              background: #f7f7f7;
            }

            .logo {
              margin-bottom: -35px;
            }

            .button-edition-mode {
              background: #3498db;
              max-width: 250px;
              border-radius: 4px;
              padding: 10px;
              margin: 0 20px 20px auto;
            }

            .custom-gradient-yellow {
              background: linear-gradient(
                to bottom,
                rgba(252, 231, 3, 1) 0%,
                rgba(231, 169, 0, 1) 100%
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
