import * as React from 'react'
import queryString from 'query-string'


export default class SearhPage extends React.Component<any> {
  render(): React.Node {
       const { location: {search}} = this.props
        let origin = ''
        let destination = ''
        let distance = ''
        if (search) {
        const qs = queryString.parse(search)
        if(qs){
           origin = qs.origin
           destination = qs.destination
           distance = qs.distance
        }
      }

      return <div style={{marginTop: '50px'}}>The distance between {origin} and {destination} is {distance}</div>
  }
}
