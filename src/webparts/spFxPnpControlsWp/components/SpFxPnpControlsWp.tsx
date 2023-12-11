import * as React from 'react';
import styles from './SpFxPnpControlsWp.module.scss';
import { ISpFxPnpControlsWpProps } from './ISpFxPnpControlsWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxPnpControlsWp extends React.Component<ISpFxPnpControlsWpProps, {}> {
  public render(): React.ReactElement<ISpFxPnpControlsWpProps> {
    return (
      <div className={ styles.spFxPnpControlsWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>PnP Controls Demo!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
              <br></br><br></br>
              Selected Colour code is  : {this.props.color}
              <h2 style={{color: this.props.color}}>This Text Color will change as per color code</h2>
              <br></br><br></br>
              List GUID : {this.props.listId}
              <br></br><br></br>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
