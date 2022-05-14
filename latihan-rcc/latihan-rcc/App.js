import React, {Component} from 'react';
import { Text, View } from 'react-native';

//RCC
class LatihanRCC extends Component{
  constructor(props) {
    super (props);
    this.TextTitle = this.TextTitle.bind(this);
    this.state = {
      hari: "Sabtu",
      kelas: "Reguler TI-20 PA",
    };
  }

  TextTitle(param) {
    return <Text>{param.data}</Text>
  }
  StudentData1 = (id, name) => {
    return (
      <View>
        <Text>Student ID : {id} </Text>
        <Text>Student Name : {name} </Text>
      </View>
    );
  };
  StudentData2 = (param) => {
    return (
      <View>
        <Text>Student ID : {param.id} </Text>
        <Text>Student Name : {param.name} </Text>
      </View>
    );
  };

  render() {
    const TrimSchedule = () => {
      let waktu = '07.30-10.00';
      return (
        <View>
          <Text>Hari: {this.state.hari} </Text>
          <Text>Pukul: {waktu} </Text>
          <Text>Kelas: {this.state.kelas} </Text>
        </View>
      );
    };

    return (
      <View>
      <Text>LatihanRCC</Text>
      {this.TextTitle({data: "Pemrograman Perangkat Bergerak"})}

      {TrimSchedule()}
      
      {this.StudentData1(202310042, 'Muhammad Mukhlis')}
      <this.StudentData2 id={202310013} name={'Achmad Afif Abijar'} />
      </View>
    );
  }
}

export default LatihanRCC;