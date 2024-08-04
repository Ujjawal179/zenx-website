import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import styles from "./Profile.module.css";


function Profile() {
  const [Name, setName] = React.useState('Ujjawal');
  const [Email, setEmail] = React.useState('Ujjawal@gmail.com');
  const [PhoneNumber, setPhoneNumber] = React.useState(276874248);
  const [Pic, setPic] = React.useState('/bg.jpg ');
  const [Weight, setWeight] = React.useState(30);
  const [Height, setHeight] = React.useState(330);
  const [Gender, setGender] = React.useState(0);

return (
    <div >
        <h1 className="highlighted head text-center">Edit Profile</h1>
        <div className={styles.profile}>
            <div className="d-flex flex-column mw-40 justify-content-center align-items-center">
                <Image className={styles.profilepic} src={Pic} rounded />
                <input className="p-3" type="file" accept="image/*" onChange={(e) => setPic(e.target.files[0])} />
            </div>
            <div className={styles.profileDetails}>
                <TextField
                    className={styles.name}
                    id="filled-basic"
                    label={"Name"}
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                    style={{marginTop:'20px'}}
                />
                <TextField
                    className={styles.phoneNumber}
                    id="filled-basic"
                    label={"Phone Number"}
                    variant="standard"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={PhoneNumber}
                    style={{marginTop:'20px'}}
                />
                <TextField
                    className={styles.email}
                    id="filled-basic"
                    label={"Email"}
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    style={{marginTop:'20px'}}
                />
                <div>
                    <TextField
                        className={styles.weight}
                        id="filled-basic"
                        label={"Weight"}
                        variant="standard"
                        onChange={(e) => setWeight(e.target.value)}
                        value={Weight}
                        style={{marginTop:'20px', marginRight:'20px'}}
                    />
                    <TextField
                        className={styles.height}
                        col="7"
                        id="filled-basic"
                        label={"Height"}
                        variant="standard"
                        onChange={(e) => setHeight(e.target.value)}
                        value={Height}
                        style={{marginTop:'20px'}}
                    />
                </div>
                <FormControl fullWidth style={{maxWidth:'100px', marginTop:'20px'}}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Gender
                    </InputLabel>
                    <NativeSelect
                        defaultValue={Gender}
                        inputProps={{
                            name: "age",
                            id: "uncontrolled-native",
                        }}
                        onChange={(e) => setGender(e.target.value)}
                        value={Gender}
                    >
                        <option value={1}>Male</option>
                        <option value={0}>Female</option>
                    </NativeSelect>
                </FormControl>
                <Button className={styles.updatebtn} type="submit">
                            Submit
                </Button>
            </div>
        </div>
    </div>
);
}

export default Profile;
