### To Test with Enzyme ###
1. Add enzyme dependency as follows
npm i --save-dev enzyme enzyme-adapter-react-16
2. Make sure to add 
    ``
    import Enzyme from 'enzyme';
    import Adapter from 'enzyme-adapter-react-16';
    Enzyme.configure({ adapter: new Adapter() });
    ``