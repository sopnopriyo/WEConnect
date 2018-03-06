import React from 'react';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Time from 'material-ui/svg-icons/device/access-time';
import Phone from 'material-ui/svg-icons/communication/call';
import Link from 'material-ui/svg-icons/content/link';
import Location from 'material-ui/svg-icons/communication/location-on';
import Paper from 'material-ui/Paper';
import { Card, CardMedia, CardText } from 'material-ui/Card';
import Camera from 'material-ui/svg-icons/image/photo-camera';
import Favorite from 'material-ui/svg-icons/action/favorite';
import RaisedButton from 'material-ui/RaisedButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import Star from 'material-ui/svg-icons/toggle/star';
import { GridList, GridTile } from 'material-ui/GridList';
import Device from '../images/devices.jpg';
import Cover from '../images/cover.jpg';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import GoogleMapReact from 'google-map-react';


const Reviews = () => (
  <section>
    <h2>Most Recent Reviews</h2>
    <List>
      {[1, 2, 3].map(i => (
        <ListItem key={i}>
          <p><strong>Shade098</strong> <span>Most of the reviews here are absolutely spot on. Their make up artist are also two pretty to take a bite ot of Bombest desserts i've had in a very long time. Very interesting combination.</span></p>
          <Divider />
        </ListItem>

	))
	}
    </List>
  </section>

);

const NewReview = () => {
  function BorderDiv(props) {
    return (
      <div style={{ border: '1px solid grey', padding: '5px', marginBottom: '5px' }}>
        {props.children}
      </div>
    );
  }

  return (
    <section style={{ width: '500px' }}>
      <BorderDiv>
        <TextField className="w-100" floatingLabelText="Enter your name" />
      </BorderDiv>
      <BorderDiv>
        <span>
          <StarBorder />
          <StarBorder />
          <StarBorder />
          <StarBorder />
          <StarBorder />
        </span>
        <span>Rate this business First</span>
        <TextField className="w-100" floatingLabelText="Enter your review" />
      </BorderDiv>
      <FlatButton
        className=""
        backgroundColor="#a4c639"
        label="Post Review"
      />
    </section>
  );
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class BusinessPage extends React.Component {
  constructor(props) {
	 super(props);
  }

  render() {
  	return (
    <main>
      <div>
        <img style={{ width: '100%', height: '300px' }} src={Cover} />
      </div>
      <section className="main mxy-auto container ">
        <div className="flex">
          <div className="flex w-50 justify-space-between" style={{ position: 'relative' }}>
            <Paper
              className="flex"
              style={{
 position: 'absolute', top: '-80', width: '150px', height: '150px',
}}
            >
              <div className="mxy-auto text-center">
                <Camera />
                <h6>Add Photo</h6>
              </div>
            </Paper>
            <h3 style={{ marginLeft: '180px' }}>Mary Kay Fashion</h3>
            <p>Fashion</p>
          </div>
          <div />
        </div>
        <section className="flex">
          <main className="main" style={{ }}>

            <div style={{ borderRight: '1px solid black', paddingRight: '20px' }}>
              <div style={{ marginLeft: '180px' }}>
                <RaisedButton backgroundColor="#f2f2f2" label="Write a review" />
                <RaisedButton
                  backgroundColor="#f2f2f2"
                  icon={<Favorite />}
                  style={{ margin: '12px' }}
                />
                <span>
                  <Star />
                  <Star />
                  <Star />
                  <StarHalf />
                  <StarBorder />
                </span>
              </div>
              <Divider />
              <section style={{ padding: '3%' }}>
                <GridList
                  style={{
 display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', width: '500px',
}}
                  padding={8}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map(i => (
                    <GridTile
                      key={i}
                    >
                      <img src={Device} />
                    </GridTile>

    			      ))}
                </GridList>
              </section>
              <Divider />
              <Reviews />
            </div>
            <div className="flex flex-end" style={{ paddingRight: '20px' }}>
              <NewReview />
            </div>
          </main>
          <aside style={{ marginLeft: '20px' }}>
            <Paper>
              <List>
                <ListItem leftIcon={<Time />} >
                  <span><strong>Mon - Fri</strong> 9:00am - 5:00pm</span>
                  <p><strong>Saturdays</strong> 9:00am - 4:00pm</p>
                </ListItem>
                <ListItem primaryText="08164488989" leftIcon={<Phone />} />
                <ListItem primaryText="marykayfashion.com.ng" leftIcon={<Link />} />
              </List>
            </Paper>

            <Card style={{ marginTop: '30px' }}>

              <CardMedia className="map-media" style={{ height: '250px' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyA0W2GMiWvp-Jm7ZbpthWIoyamHpJFarts' }}
                  defaultCenter={{ lat: 6.5005009, lng: 3.3666 }}
                  defaultZoom={14}
                >
                  <AnyReactComponent
                    lat={6.5005009}
                    lng={3.3666}
                    text="Mary Kay Fashion"
                  />
                </GoogleMapReact>
              </CardMedia>
              <CardText className="flex">
                <Location /> <span>Block 1, Admirality Way, Lekki Phase 1, Lagos, Nigeria.</span>
              </CardText>
            </Card>
          </aside>
        </section>

      </section>
    </main>
  	);
  }
}

export default BusinessPage;
