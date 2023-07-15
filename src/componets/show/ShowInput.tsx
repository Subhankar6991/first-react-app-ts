import React from "react";
import Input from "../utility/Input";
export default function ShowInput() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          <Input/><Input/><Input/>
        </div>
      );
}