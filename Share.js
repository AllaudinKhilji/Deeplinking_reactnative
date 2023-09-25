
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'; // Import ScrollView for scrolling if needed
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const Share = () => {
//   const [dataArray, setDataArray] = useState([]);
//   const [customername, setCustomerName] = useState('');
//   const [address, setAddress] = useState('');
//   const [mobilenumber, setMobileNumber] = useState('');
//   const [emailid, setEmailId] = useState('');

//   const removeQuotes = (str) => {
//     return str.replace(/["']/g, '');
//   };

//   useEffect(() => {
//     // Retrieve 'homedata' from AsyncStorage
//     AsyncStorage.getItem('homedata')
//       .then((id) => {
//         if (id !== null) {
//           const formattedId = removeQuotes(id);
//           fetchBikeDetails(formattedId);
//         }
//       })
//       .catch((error) => {
//         console.error('Error retrieving homedata from AsyncStorage:', error);
//       });
//   }, []);

//   const fetchBikeDetails = async (id) => {
//     const url = `https://shy-tan-tam.cyclic.cloud/formdetails/getbike/${id}`;

//     try {
//       const response = await axios.get(url);
//       const bike = response.data;
//       setDataArray([]);
//       setDataArray((prevDataArray) => [...prevDataArray, bike]);
//       await AsyncStorage.setItem('bikedata', JSON.stringify(bike));
//       console.log('Bike data stored successfully');
//     } catch (error) {
//       console.error('Error fetching bike details:', error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//     {dataArray.map((data, index) => (
//       <View key={index} style={styles.content}>
//         <TouchableOpacity>
//           <Text style={{ color: 'white', fontSize: 20 }}>Back</Text>
//         </TouchableOpacity>
//         <View style={styles.hr} />
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <Text style={{ textAlign: 'left', color: 'white', fontSize: 30, flex: 1 }}>
//             Quotation
//           </Text>
//           <Image
//             style={styles.logo}
//             source={{
//               uri: 'https://logos-world.net/wp-content/uploads/2022/12/Royal-Enfield-Logo.jpg',
//             }}
//           />
//         </View>

//         {/* Add Customer Details Section Below */}
//         <Text style={styles.title}>Customer details</Text>
//         <View style={styles.card}>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>Customer Name :</Text>
//             <TextInput
//               style={styles.input}
//               value={customername}
//               onChangeText={setCustomerName}
//               placeholder="Enter customer name"
//             />
//           </View>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>Address :</Text>
//             <TextInput
//               style={styles.input}
//               value={address}
//               onChangeText={setAddress}
//               placeholder="Enter address"
//             />
//           </View>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>Mobilenumber :</Text>
//             <TextInput
//               style={styles.input}
//               value={mobilenumber}
//               onChangeText={setMobileNumber}
//               placeholder="Enter Mobile"
//             />
//           </View>
//           <View style={styles.cardContent}>
//             <Text style={styles.labelText}>emailid :</Text>
//             <TextInput
//               style={styles.input}
//               value={emailid}
//               onChangeText={setEmailId}
//               placeholder="Enter mailId"
//             />
//           </View>
//         </View>
//         <View style={styles.imageCard}>
//             {data.adminallimages && data.adminallimages.length > 0 && (
//               <Image
//                 style={styles.customerImage}
//                 source={{ uri: data.adminallimages[0] }}
//               />
//             )}
//           </View>

//           {/* Center the datacard container */}
//           <View style={styles.centeredContainer}>
//             <View style={styles.datacard}>
//               <Text style={styles.datacardtext}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>

//               <View style={styles.priceContainer}>
//                 <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1 }}>Ex.showroom price (including GST)</Text>
//                 <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right' }}>₹  {data.exShowroomPrice}</Text>
//               </View>

//               <View style={styles.priceContainer}>
//                 <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1 }}>RTO Charges</Text>
//                 <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right' }}>₹  500</Text>
//               </View>

//               {/* Add a separate view for the extended line */}
//               <View style={styles.extendedLine} />
//             </View>
//           </View>
//       </View>
//     ))}
//   </ScrollView>

//   );
// };

// const styles = StyleSheet.create({
//   centeredContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   extendedLine: {
//     borderBottomWidth: 100, // Set the desired length (e.g., 50 pixels)
//     borderBottomColor: 'white',
//     marginBottom: 20, // Add spacing between the line and the next content
//   },
  
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     marginBottom: 20, // Add spacing between the line and the next content
//     columnGap: 100
//   },
  
//   container: {
//     cardContent: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       paddingHorizontal: 20, // Add horizontal padding as needed
//       marginBottom: 10, // Add margin at the bottom as needed
//     },
  
//     backgroundColor: 'black',
//     flexGrow: 1, // To make sure content can be scrolled if needed
//     paddingVertical: 20, // Add some padding at the top and bottom
//     paddingHorizontal: 10, // Add horizontal padding
//   },
//   content: {
//     marginVertical: 10,
//   },
//   hr: {
//     borderWidth: 1,
//     borderColor: 'white',
//     width: '100%',
//   },
//   title: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 25,
//     textAlign: 'center',
//   },
//   logo: {
//     height: 80,
//     width: 180,
//     borderRadius: 10,
//     height: 60,
//     marginTop: 10,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: 'white',
//     width: '100%', // Adjust the width as needed
//     backgroundColor: 'black',
//     marginTop: 10, // Add margin between sections
//     padding: 10, // Add padding inside the card
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5, // Add vertical margin between items
//   },
//   labelText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '700',
//     flex: 1, // To allow text to expand and push TextInput to the right
//   },
//   input: {
//     flex: 2, // To allow TextInput to expand
//     color: 'black',
//     backgroundColor: 'rgba(217, 217, 217, 1)',
//     paddingLeft: 10, // Add left padding for better appearance
//   },
//   imageCard: {
//     alignItems: 'center',
//     marginBottom: 10,
//     marginTop: 50,
//     height: 600
//   },
//   customerImage: {
//     width: 800,
//     height: 500,
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
//   datacard: {
//     width: 800,
//     height: 800,
//     backgroundColor: 'rgba(151, 151, 151, 0.3)',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   datacardtext: {
//     color: 'white',
//     fontSize: 30,
//     textDecorationLine: 'underline',
//     marginBottom: 20
//   }
// });

// export default Share;

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView,Checkbox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Stack, CheckBox } from 'react-native-elements';
import { ListItem } from '@rneui/themed';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Share = () => {
  const [dataArray, setDataArray] = useState([]);
  const [customername, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [emailid, setEmailId] = useState('');
  
 


  
  const removeQuotes = (str) => {
    return str.replace(/["']/g, '');
  };

  useEffect(() => {
    AsyncStorage.getItem('homedata')
      .then((id) => {
        if (id !== null) {
          const formattedId = removeQuotes(id);
          fetchBikeDetails(formattedId);
        }
      })
      .catch((error) => {
        console.error('Error retrieving homedata from AsyncStorage:', error);
      });
  }, []);

  const fetchBikeDetails = async (id) => {
    const url = `https://shy-tan-tam.cyclic.cloud/formdetails/getbike/${id}`;

    try {
      const response = await axios.get(url);
      const bike = response.data;
      setDataArray([]);
      setDataArray((prevDataArray) => [...prevDataArray, bike]);
      await AsyncStorage.setItem('bikedata', JSON.stringify(bike));
      console.log('Bike data stored successfully');
    } catch (error) {
      console.error('Error fetching bike details:', error);
    }
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {dataArray.map((data, index) => (
        <View key={index} style={styles.content}>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 20 }}>Back</Text>
          </TouchableOpacity>
          <View style={styles.hr} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ textAlign: 'left', color: 'white', fontSize: 30, flex: 1 }}>
              Quotation
            </Text>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://logos-world.net/wp-content/uploads/2022/12/Royal-Enfield-Logo.jpg',
              }}
            />
          </View>

          {/* Add Customer Details Section Below */}
          <Text style={styles.title}>Customer details</Text>
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.labelText}>Customer Name :</Text>
              <TextInput
                style={styles.input}
                value={customername}
                onChangeText={setCustomerName}
                placeholder="Enter customer name"
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.labelText}>Address :</Text>
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter address"
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.labelText}>Mobilenumber :</Text>
              <TextInput
                style={styles.input}
                value={mobilenumber}
                onChangeText={setMobileNumber}
                placeholder="Enter Mobile"
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.labelText}>emailid :</Text>
              <TextInput
                style={styles.input}
                value={emailid}
                onChangeText={setEmailId}
                placeholder="Enter mailId"
              />
            </View>
          </View>
          <View style={styles.imageCard}>
            {data.adminallimages && data.adminallimages.length > 0 && (
              <Image
                style={styles.customerImage}
                source={{ uri: data.adminallimages[0] }}
              />
            )}
          </View>

          {/* Center the datacard container */}
          <View style={styles.centeredContainer}>
            <View style={styles.datacard}>

              <Text style={styles.datacardtext}>{data.vehiclename}- {data.model} {data.EngineCC} </Text>

              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Ex.showroom price (including GST)</Text>
                <Text style={styles.priceValue}>₹ {data.exShowroomPrice}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1 }}>RTO Charges</Text>
                 <Text style={{ color: 'white', fontSize: 30, flex: 1, textAlign: 'right' }}>₹  500</Text>
               </View>
             
              {data.insurance && data.insurance.map((insu, insuIndex) => (
                <View key={insuIndex} style={styles.priceContainer}>
                  <Text style={{ color: 'rgba(249, 249, 249, 0.7)', fontSize: 22, flex: 1,fontSize:30}}>Insurence</Text>
                <Text style={styles.priceText}>{insu.insurancetext} ₹{insu.insurancevalue}</Text>
                
                
              </View>

           
              
              ))}
               {data.hypothication && data.hypothication.map((hypo, hypoIndex) => (
                <View key={hypoIndex} style={styles.priceContainer}>
                <Text style={styles.priceText}>{hypo.hypothicationtext}  ₹{hypo.hypothicationvalue}</Text>
                
               
              </View>

           
              
              ))}
               <View style={styles.priceContainer}>
                <Text style={styles.priceText}>OnroadPrice</Text>
                
                <Text style={styles.priceValue}>₹3,00,000</Text>
              </View>
              <Text style={{color:'white',fontSize:25,textAlign:'left'}}>Optional Addons/Products</Text>  
            
              <View style={styles.priceContainer}>
  <Text style={styles.warentyText}>Extended Warranty:</Text>
  
</View>
            
            {data.extendedwarranty && data.extendedwarranty.map((waranty, warentyIndex) => (
                 
                <View key={warentyIndex}style={styles.priceContainer}>
                  
                <Text style={styles.priceText}>{waranty.warrantytext} ₹{waranty.warrantyvalue} </Text>
               
               
              </View>

           
              
              ))}

<View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Style</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comfort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Safety</Text>
        </TouchableOpacity>
      </View>   


          
      <View>
      <SelectDropdown
        data={data.mirrors} // Pass the mirrors array to the SelectDropdown component
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Select'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.mirrorstext; // Access the mirrorText property
        }}
        rowTextForSelection={(item, index) => {
          return item.mirrorstext; // Access the mirrorText property
        }}
        rowValueForSelection={(item, index) => {
          return item.mirrorsvalue; // Access the mirrorValue property
        }}
        buttonStyle={styles.textInput}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#ffff'}
              size={18}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1BtnTxtStyle}
      />
    </View>
  
      </View>
              

      
          


              {/* Add a separate view for the extended line */}
              <View style={styles.extendedLine} />
           
         
            
            
            
            
            
            
            </View>
            
            
       
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
    marginTop: 20,
  },

  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    minWidth: 100, 
  },

  buttonClicked: {
    backgroundColor: 'white',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },




  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },

  buttonClicked: {
    backgroundColor: 'white',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  insuranceText: {
    color: 'white',
    fontSize: 22,
    flex: 1,
  },

  insuranceValue: {
    color: 'white',
    fontSize: 22,
    flex: 1,
    textAlign: 'right',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extendedLine: {
    borderBottomWidth: 100,
    borderBottomColor: 'white',
    marginBottom: 20,
  },
  
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 20,
  },

  priceText: {
    color: 'rgba(249, 249, 249, 0.7)',
    fontSize: 22,
    flex: 1,
  },
  warentyText: {
    color: 'rgba(249, 249, 249, 0.7)',
    fontSize: 22,
    
  },

  priceValue: {
    color: 'white',
    fontSize: 30,
    flex: 1,
    textAlign: 'right',
  },
  
  container: {
    backgroundColor: 'black',
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  content: {
    marginVertical: 10,
  },
  hr: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  logo: {
    height: 80,
    width: 180,
    borderRadius: 10,
    height: 60,
    marginTop: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    backgroundColor: 'black',
    marginTop: 10,
    padding: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  labelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  input: {
    flex: 2,
    color: 'black',
    backgroundColor: 'rgba(217, 217, 217, 1)',
    paddingLeft: 10,
  },
  imageCard: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
    height: 600,
  },
  customerImage: {
    width: 800,
    height: 500,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  datacard: {
    width: 800,
    height: 800,
    backgroundColor: 'rgba(151, 151, 151, 0.3)',
    alignItems: 'center',
    borderRadius: 10,
  },
  datacardtext: {
    color: 'white',
    fontSize: 30,
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
});

export default Share;
