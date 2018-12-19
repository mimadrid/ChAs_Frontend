import * as React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label } from 'reactstrap';

export class FeaturesPanel extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {dropdownOpen: false}
  }

  onFeatureChange = (event: any) => {
    this.props.onFeatureChange(event.target.value)
  }

  toggle=() => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const margin_style = {
      border: '#aaa',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '2px',
      paddingLeft: '5px',
      paddingRight: '5px',
      marginTop: '15px'
    };

    const features = ['BRG1', 'CBX3', 'CBX7', 'C_MYC', 'CoREST', 'E2F1', 'ESRRB', 'HCFC1', 'HDAC1', 'HDAC2', 'KAP1', 'KDM2A', 'KDM2B', 'KLF4', 'LAMINB', 'LSD1', 'MAFK', 'MAX', 'MBD1A', 'MBD1B', 'MBD2A', 'MBD2T', 'MBD3A', 'MBD4', 'MECP2', 'MED1', 'MED12', 'MI2B', 'MLL2', 'NANOG', 'NIPBL', 'N_MYC', 'OCT4', 'OGT', 'P300', 'PHF19', 'POLII', 'RAD21', 'REST', 'RING1B', 'RNAPII.8WG16', 'RNAPII.S2P', 'RNAPII.S5P', 'RNAPII.S7P', 'RYBP', 'SETDB1', 'SIN3A', 'SMAD1', 'SMC1', 'SMC3', 'SOX2', 'STAT3', 'SUZ12', 'TAF1', 'TCF3', 'TCFCP2I1', 'TET1', 'ZC3H11A', 'ZNF384', 'X5fC', 'X5hmC', 'X5mC', 'CTCF', 'H2AZ', 'H2Aub1', 'H3K27ac', 'H3K27me3', 'H3K36me2', 'H3K36me3', 'H3K4me1', 'H3K4me2', 'H3K4me3', 'H3K79me2', 'H3K9ac', 'H3K9me3', 'H4K20me3', 'EZH2', 'G9A'].sort()

    return (
      <Form className='text-center' style={margin_style}>
        <FormGroup className='text-center'>
          <Label for="Select">Features</Label>
          <br/>
          <ButtonDropdown style={{display: 'grid'}} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle style={{color: 'black', backgroundColor: 'white'}} caret>
              {this.props.feature}
            </DropdownToggle>
            <DropdownMenu  className='text-center container-fluid' style={{ height: 'auto',  maxHeight: '200px', overflowX: 'hidden'}}>
              { features.slice(0,-1).map(feature => <div key={feature}><DropdownItem value={feature} onClick={this.onFeatureChange}>{feature}</DropdownItem><DropdownItem style={{margin: 0}} divider/></div>) }
              { features.slice(-1).map(feature => <div key={feature}><DropdownItem style={{marginTop: '5px'}} value={feature} onClick={this.onFeatureChange}>{feature}</DropdownItem></div>) }
            </DropdownMenu>
          </ButtonDropdown>
        </FormGroup>
      </Form>
    );
  }
}
