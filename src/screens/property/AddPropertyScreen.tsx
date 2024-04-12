import {View, Text, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import AddPropertyForm from '../../components/forms/property/AddPropertyForm';

const AddPropertyScreen = () => {
  return (
    <MainLayout isHeaderShown={true} isShownBack={true} title="Add Property">
      <AddPropertyForm />
    </MainLayout>
  );
};

export default AddPropertyScreen;
