import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import { PropertyFieldDateTimePicker, DateConvention, TimeConvention } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';

import * as strings from 'CustomerSatisfactionRatingWebPartStrings';
import CustomerSatisfactionRating from './components/CustomerSatisfactionRating';
import { ICustomerSatisfactionRatingProps } from './components/ICustomerSatisfactionRatingProps';

export interface ICustomerSatisfactionRatingWebPartProps {
  description: string;
  Investments?:string;
    Insurance?:string;
    Health?:string;
    Newcustomercount?:string;
    Date?:string;
}



export default class CustomerSatisfactionRatingWebPart extends BaseClientSideWebPart<ICustomerSatisfactionRatingWebPartProps> {


  public render(): void {
    const element: React.ReactElement<ICustomerSatisfactionRatingProps> = React.createElement(
      CustomerSatisfactionRating,
      {
        description: this.properties.description,
        Investments: this.properties.Investments,
        Insurance: this.properties.Insurance,
        Health:this.properties.Health,
        Newcustomercount: this.properties.Newcustomercount,
        Date: this.properties.Date

      }
    );

    ReactDom.render(element, this.domElement);
  }


  protected onDispose(): void {
      ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }


  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }
  
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                  PropertyPaneSlider('investments', {
                    label: strings.InvestmentFieldLabel,
                    min:0, max:100
                  }), 

                  PropertyPaneSlider('insurance', {
                    label: strings.InsuranceFieldLabel, 
                    min:0, max:100
                  }),

                  PropertyPaneSlider('health', {
                    label: strings.HealthFieldLabel,
                    min:0, max:100
                  }),

                PropertyPaneSlider('newCustomerCount', {
                  label: "newCustomerCount", min:0, max:10000
                }),
                
                PropertyFieldDateTimePicker('selectdate', {
                  label: 'Select the date and time',
                  //initialDate: this.properties.Date,
                  dateConvention: DateConvention.DateTime,
                  timeConvention: TimeConvention.Hours12,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'dateTimeFieldId',
                  showLabels: false
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
