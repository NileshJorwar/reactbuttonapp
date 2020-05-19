import React from "react";
import {shallow} from "enzyme";
import MyClass from "./MyClass";
import Button from "./button";

describe("MyClass", () => {
        const props ={
            greeting: "hi"
        }
        it('should', function () {
            const wrapper = shallow(<MyClass {...props}/>).dive()
            expect(wrapper.find("div").length).toEqual(3);
            expect(wrapper.find("greeting").text()).toEqual("hi");
            expect(wrapper.find("name").text()).toEqual("Nil");
        });

        it('should display button in MyClass', function () {
            const wrapper = shallow(<MyClass {...props}/>)
            expect(wrapper.find(Button).length).toEqual(1);
        });

        it('should display button in MyClass', function () {
            const wrapper = shallow(<MyClass {...props}/>)
            wrapper.instance().handleClick();
            wrapper.update();
            expect(wrapper.state().name).toEqual("Nilesh");
        });
    }
);