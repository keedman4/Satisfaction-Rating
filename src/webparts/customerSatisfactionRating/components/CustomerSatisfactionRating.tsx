import * as React from 'react';
import styles from './CustomerSatisfactionRating.module.scss';
import { ICustomerSatisfactionRatingProps } from './ICustomerSatisfactionRatingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from 'sp-pnp-js';
import { ClassRating } from './ClassRating';
import { IRating } from './IRating';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import * as jQuery from "jquery";
import * as $ from 'jquery';



export default class CustomerSatisfactionRating extends React.Component<ICustomerSatisfactionRatingProps, any> {

  public constructor(props:ICustomerSatisfactionRatingProps,any)
  {
      super(props);
      this.state={
          items:[]
      };
      }

    public  render() {
      jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); jQuery(".CanvasZone").prop("style", "max-width: none");

        return(
        <>
            {
                this.state.items.map((item:IRating) => {
            return(
                <div  className={styles.alertNews}>
                    <h5><b>Customer Satisfaction Rating as at <span></span> {item.Date}</b></h5>
                        <div  className={styles.cardOutline}>
                            <div className={styles.ratingsOutline}>
                                <span className={styles.head}><b>Investments</b></span>
                                <h1>{item.Investments}%  <i className={styles.icons}><ArrowDropUpIcon fontSize="small" /></i></h1>
                               
                            </div>
                            <div className={styles.ratingsOutline}>
                            <span className={styles.head}><b>Insurance</b></span>
                                <h1>{item.Insurance}% <i className={styles.icons}><ArrowDropUpIcon fontSize="small" /></i></h1>
                            </div>
                            <div className={styles.ratings}>
                              {/* <div className={styles.ratingsOutline}> */}
                              <span className={styles.head}><b>Health</b></span>
                                <h1>{item.Health}% <i className={styles.icons}><ArrowDropUpIcon fontSize="small" /></i></h1>
                            </div>
                            </div>
                                <div  className={styles.cardOutline}>
                                <div className={styles.cust}>
                                    <h1 className="float-left"><b>{item.Newcustomercount}</b><span className={styles.ncc}>New Customer Count</span></h1>
                                    {/* <h3 >New Customer Count </h3> */}
                                    </div>
                                    {/* <div className={style.custs}>
                                    
                                    </div> */}
                                    <div className={styles.custsx}>
                                    <h1 className={styles.icons}><ArrowDropDownIcon fontSize="small" /></h1>
                                    </div>
                                    </div>
                                    </div>
            );
        
            
        })
        
        }
        
        </>
        );
        }
        
        public componentDidMount()
        {
            // debugger;
            this._RatingList();
        }
        private _RatingList():void
        {
            pnp.sp.web.lists.getByTitle(`CustomerRating`).items.get().then
            ((response)=>{
                let RatingCollection=response.map(item=> new ClassRating(item)).reverse();
                let RatingCard = RatingCollection.slice(0, 1);
                this.setState({items:RatingCard});
            }
        
            );
        }
        
        }
  