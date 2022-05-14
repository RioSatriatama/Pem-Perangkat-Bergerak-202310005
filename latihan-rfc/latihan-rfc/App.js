import React from "react";
import { Text, View } from "react-native";

// disebut Cleancode
function Latihan() {
const StudentData1 = (param) => {
    return (
        <View>
            <Text>Student ID : {param.id} </Text>
            <Text>Student Name : {param.name} </Text>
        </View>
    );
  };
  
 const StudentData2 = (id,name) => {
     return (
         <View>
             <Text>Student ID : {id} </Text>
             <Text>Student Name : {name} </Text>
         </View>
     );
 };

 return (
     <View>
         <StudentData1 id="202310042" name= "Mukhlis" />
         {StudentData2 (202310013,"Afif")}
     </View>
 );
 

// const TextTitle = (param) => {
//   return <Text>{param.data}</Text>;
// };

// const hari = "Sabtu";

// export function Latihan() {
//   var kelas = "Reguler TI-20 PA";

//   const Trimschedule = () => {
//     let waktu = "07.30 - 10.00";
//     return (
//       <View>
//         <Text>Hari: {hari} </Text>
//         <Text>Pukul: {waktu} </Text>
//         <Text>Kelas: {kelas} </Text>
//       </View>
//     );
//   };

//   return (
//     <View>
//       <Text>Latihan</Text>
//       <TextTitle data="Pemograman Perangkat Bergerak" />
//       {TextTitle({ data: "Pertemuan ke 7" })}

//       <Trimschedule />
//     </View>
//   );
// }

// export function Latihan() {
//     return (
//         <View>
//         <Text>Latihan</Text>
//         <TextTitle data="Pemograman Perangkat Bergerak" />
//         {TextTitle({data:"Pertemuan ke 7"})}
//         </View>
//     )
// }
 }
export default Latihan;