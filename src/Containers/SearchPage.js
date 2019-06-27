import * as React from 'react'
import queryString from 'query-string'
import {Container} from '../Components'


export default class SearhPage extends React.Component<any> {
  render(): React.Node {
       const { location: {search}} = this.props
        let origin = ''
        let destination = ''
        let distance = ''
        let date = ''
        let passengers = ''
        if (search) {
        const qs = queryString.parse(search)
        if(qs){
           origin = qs.origin
           destination = qs.destination
           distance = qs.distance
           date = qs.date
           passengers = qs.passengers          
        }
      }

      return <Container><div style={{marginTop: '50px'}}>The distance between {origin} and {destination} is {distance}KM you are leaving with {passengers} passengers on {date}.</div></Container>
  }
}
