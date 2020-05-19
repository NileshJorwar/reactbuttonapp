import React from "react";
import {shallow} from "enzyme";
import Button from "./button";

describe('Button', function () {

    // const myFunctionMock = jest.spyOn(Button.prototype,'myFunction');
    const myFunctionMock = jest.fn();
    it('should simulate the button', function () {
        const wrapper = shallow(<Button myFunction={myFunctionMock}/>);
        wrapper.find("button").simulate("click");
        expect(myFunctionMock).toHaveBeenCalled();
    });
});
