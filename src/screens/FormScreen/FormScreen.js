import {SwiperFlatList} from 'react-native-swiper-flatlist';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const APP_ICON = require('../../assets/images/icon_color.png');
const HEAD_IMG = require('../../assets/images/header_color.png');
const BACK_ICON = require('../../assets/images/back_arrow.png');

const FormScreen = props => {
  //swiper flat list reference
  const scrollRef = useRef(null);
  //checkbox state
  const [isSelected, setSelection] = useState(false);
  //current index state
  const [currentIndex, setCurrentIndex] = useState(0);

  //validation for personal info inputs
  const validatePersonalInfo = () => {
    setBirthday(birthday);
    if (
      fullName != null &&
      position != null &&
      personalInputs[2].val != null &&
      city != null &&
      phoneNumber != null
    ) {
      return goToNextPage();
    }
  };

  //states for personal info inputs
  const [fullName, setFullName] = useState(null);
  const [position, setPosition] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [city, setCity] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  //personal information input fields
  const [personalInputs, setPersonalInputs] = useState([
    {
      label: 'Full name',
      placeholder: 'type your full name',
      keyboardType: 'default',
      isDate: false,
      maxLength: 50,
      val: fullName,
      method: setFullName,
    },
    {
      label: 'Position',
      placeholder: 'for example: IOS developer, Designer',
      keyboardType: 'default',
      isDate: false,
      maxLength: 50,
      val: position,
      method: setPosition,
    },
    {
      label: 'Your birthday',
      placeholder: 'dd.mm.yyyy',
      keyboardType: 'default',
      isDate: true,
      maxLength: 50,
      val: birthday,
      method: setBirthday,
    },
    {
      label: 'City',
      placeholder: 'Kharkiv',
      keyboardType: 'default',
      isDate: false,
      maxLength: 25,
      val: city,
      method: setCity,
    },
    {
      label: 'Phone number',
      placeholder: '+38 (0_ _) _ _ _ - _ _ - _ _',
      keyboardType: 'phone-pad',
      isDate: false,
      maxLength: 15,
      val: phoneNumber,
      method: setPhoneNumber,
    },
  ]);

  //education input fields
  const [educationInputs, setEducationInputs] = useState([
    {
      label: 'Educational Institution',
      placeholder: 'Kharkiv National University of Radioelectronix',
      keyboardType: 'default',
      maxLength: 100,
    },
    {
      label: 'Specialization',
      placeholder: 'Java Developer',
      keyboardType: 'default',
      maxLength: 25,
    },
    {
      label: 'Graduated Year',
      placeholder: 'yyyy',
      keyboardType: 'numeric',
      maxLength: 4,
    },
  ]);

  //courses input fields
  const [coursesInputs, setCoursesInputs] = useState([
    {
      label: 'Educational Organization',
      placeholder: 'enter name here',
      keyboardType: 'default',
      maxLength: 25,
    },
    {
      label: 'Course',
      placeholder: 'enter name here',
      keyboardType: 'default',
      maxLength: 25,
    },
    {
      label: 'Finish Date',
      placeholder: 'mm.yyyy',
      keyboardType: 'numeric',
      maxLength: 6,
    },
  ]);

  //experience input fields
  const [experienceInputs, setExperienceInputs] = useState([
    {
      label: 'Place of Work',
      placeholder: 'Name',
      keyboardType: 'default',
      maxLength: 25,
    },
    {
      label: 'Position Held',
      placeholder: 'Java Developer',
      keyboardType: 'default',
      maxLength: 25,
    },
  ]);

  //get current index method
  const getCurrentIndex = () => {
    setCurrentIndex(scrollRef.current.getCurrentIndex());
    return currentIndex;
  };

  //go to next page method
  const goToNextPage = () => {
    scrollRef.current.scrollToIndex({index: getCurrentIndex() + 1});
  };

  //go to next page method
  const goToPrevPage = () => {
    scrollRef.current.scrollToIndex({index: getCurrentIndex() - 1});
  };

  // DatePicker states and methods
  const [date, setDate] = useState(new Date());
  const [isPickerShow, setIsPickerShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    let tempDate = new Date(currentDate);
    setIsPickerShow(false);
    setDate(selectedDate);

    //compare if selected date is not current date
    if (date.getTime() != tempDate.getTime()) {
      //update person input array list
      const list = [...personalInputs];
      list[2].val =
        ('0' + tempDate.getDate()).slice(-2) +
        '.' +
        ('0' + (tempDate.getMonth() + 1)).slice(-2) +
        '.' +
        tempDate.getFullYear();
      setPersonalInputs(list);
    }
  };

  const showPicker = () => {
    setIsPickerShow(true);
  };

  //return
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.bgTextContainer}>
          <Text style={styles.bgText}>SPRY ROCKS</Text>
        </View>

        <ImageBackground
          source={HEAD_IMG}
          resizeMode="cover"
          style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              getCurrentIndex() == 0
                ? props.navigation.navigate('IntroScreen')
                : goToPrevPage();
            }}>
            <Image source={BACK_ICON} style={styles.backArrow} />
          </TouchableOpacity>

          <View style={styles.topbarContainer}>
            <Image source={APP_ICON} style={styles.logo} />
            <Text style={styles.branding}>SPRY ROCKS</Text>
          </View>

          <View style={styles.formTextContainer}>
            <Text style={styles.formHead}>fill the form</Text>
            <Text style={styles.formDesc}>
              area with <Text style={styles.mandatory}>*</Text> must be filled
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <SwiperFlatList
            onChangeIndex={({index}) => {
              setCurrentIndex(index);
            }}
            disableGesture={true}
            showPagination={false}
            ref={scrollRef}>
            <View style={styles.inputContainer}>
              <View style={styles.formAreaContainer}>
                <Text style={styles.formAreaText}>personal info</Text>
              </View>
              <ScrollView>
                {personalInputs.map(item => {
                  return (
                    <View style={{marginBottom: 20}}>
                      <Text style={styles.inputLabel}>
                        {item.label}
                        <Text style={styles.mandatory}>*</Text>
                      </Text>
                      {item.isDate ? (
                        <TouchableOpacity
                          activeOpacity={1}
                          onPress={() => {
                            showPicker();
                          }}>
                          <TextInput
                            style={styles.input}
                            placeholder={item.placeholder}
                            editable={false}
                            value={item.val}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TextInput
                          style={styles.input}
                          placeholder={item.placeholder}
                          maxLength={item.maxLength}
                          keyboardType={item.keyboardType}
                          onChangeText={item.method}
                          value={item.val}
                        />
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.formAreaContainer}>
                <Text style={styles.formAreaText}>education</Text>
              </View>
              <ScrollView>
                {educationInputs.map(item => {
                  return (
                    <View style={{marginBottom: 20}}>
                      <Text style={styles.inputLabel}>{item.label}</Text>
                      <TextInput
                        style={styles.input}
                        placeholder={item.placeholder}
                        maxLength={item.maxLength}
                        keyboardType={item.keyboardType}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.formAreaContainer}>
                <Text style={styles.formAreaText}>courses</Text>
              </View>
              <ScrollView>
                {coursesInputs.map(item => {
                  return (
                    <View style={{marginBottom: 20}}>
                      <Text style={styles.inputLabel}>{item.label}</Text>
                      <TextInput
                        style={styles.input}
                        placeholder={item.placeholder}
                        maxLength={item.maxLength}
                        keyboardType={item.keyboardType}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.formAreaContainer}>
                <Text style={styles.formAreaText}>work experience</Text>
              </View>
              <ScrollView>
                {experienceInputs.map(item => {
                  return (
                    <View style={{marginBottom: 20}}>
                      <Text style={styles.inputLabel}>{item.label}</Text>
                      <TextInput
                        style={styles.input}
                        placeholder={item.placeholder}
                        maxLength={item.maxLength}
                        keyboardType={item.keyboardType}
                      />
                    </View>
                  );
                })}
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                  <View>
                    <Text style={styles.inputLabel}>Start</Text>
                    <TextInput
                      style={[styles.input, styles.inputInline]}
                      placeholder={'mm.yyyy'}
                      maxLength={7}
                      keyboardType={'numeric'}
                    />
                  </View>
                  <View style={{marginRight: 20}}></View>
                  <View>
                    <Text style={styles.inputLabel}>End</Text>
                    <TextInput
                      style={[styles.input, styles.inputInline]}
                      placeholder={'mm.yyyy'}
                      maxLength={7}
                      keyboardType={'numeric'}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>

            <ScrollView>
              <View style={styles.inputContainer}>
                <View style={styles.formAreaContainer}>
                  <Text style={styles.formAreaText}>your hobbies</Text>
                </View>
                <View style={{marginBottom: 0}}>
                  <Text style={styles.inputLabel}>
                    How you spend your free time?
                  </Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={[
                      styles.input,
                      {height: 120, textAlignVertical: 'top'},
                    ]}
                    placeholder="hobbies, sport, etc..."
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.formAreaContainer}>
                  <Text style={styles.formAreaText}>
                    additional information
                  </Text>
                </View>
                <View style={{marginBottom: 20}}>
                  <Text style={styles.inputLabel}>
                    Have any questions for us?
                  </Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={[
                      styles.input,
                      {height: 120, textAlignVertical: 'top'},
                    ]}
                    placeholder="Be in touch :)"
                  />
                </View>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  style={styles.checkbox}
                  value={isSelected}
                  onValueChange={setSelection}
                />
                <Text style={styles.checkboxLabel}>
                  I consent to the processing of personal data
                  <Text style={styles.mandatory}>*</Text>
                </Text>
              </View>
            </ScrollView>
          </SwiperFlatList>

          <View style={styles.buttonContainerParent}>
            {currentIndex == 4 ? (
              <TouchableOpacity
                style={[styles.buttonContainer, {border: 3}]}
                activeOpacity={1}
                onPress={() => {
                  isSelected ? props.navigation.navigate('LastScreen') : '';
                }}>
                <Text style={styles.sendButtonText}>send form</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.buttonContainer}
                activeOpacity={1}
                onPress={() => {
                  // validatePersonalInfo();
                  goToNextPage();
                }}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {isPickerShow && (
        <DateTimePicker value={date} mode={'date'} onChange={onDateChange} />
      )}
    </View>
  );
};

export default FormScreen;
