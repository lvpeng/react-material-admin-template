import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';

const FormPage = () => {

  const styles = {
    toggleDiv: {
      maxWidth: 300,
      marginTop: 40,
      marginBottom: 5
    },
    toggleLabel: {
      color: grey400,
      fontWeight: 100
    },
    buttons: {
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="填写录入"
              navigation="学而思培优 / 学前">
      <form>

        <TextField
          hintText="姓名"
          floatingLabelText="姓名"
          fullWidth={true}
        />

        <SelectField
          floatingLabelText="城市"
          value="城市"
          fullWidth={true}>
          <MenuItem key={0} primaryText="北京"/>
          <MenuItem key={1} primaryText="成都"/>
          <MenuItem key={2} primaryText="杭州"/>
        </SelectField>

        <DatePicker
          hintText="开课日期"
          floatingLabelText="开课日期"
          fullWidth={true}/>

        <div style={styles.toggleDiv}>
          <Toggle
            label="配套课程"
            labelStyle={styles.toggleLabel}
          />
        </div>

        <Divider/>

        <div style={styles.buttons}>
          <Link to="/">
            <RaisedButton label="取消"/>
          </Link>

          <RaisedButton label="保存"
                        style={styles.saveButton}
                        type="submit"
                        primary={true}/>
        </div>
      </form>
    </PageBase>
  );
};

export default FormPage;
