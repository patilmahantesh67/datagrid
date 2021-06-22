import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import DataTable, { removeData } from './index.jsx';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const gridData = [
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member",
    "checked": "true"
  },
  {
      "id": "2",
      "name": "Aishwarya Naik",
      "email": "aishwarya@mailinator.com",
      "role": "member",
      "checked": "false"
  },
  {
      "id": "3",
      "name": "Arvind Kumar",
      "email": "arvind@mailinator.com",
      "role": "admin",
      "checked": "false"
  },
  {
      "id": "4",
      "name": "Caterina Binotto",
      "email": "caterina@mailinator.com",
      "role": "member",
      "checked": "false"
  },
  {
      "id": "5",
      "name": "Chetan Kumar",
      "email": "chetan@mailinator.com",
      "role": "member",
      "checked": "false"
  },
  {
      "id": "6",
      "name": "Jim McClain",
      "email": "jim@mailinator.com",
      "role": "member",
      "checked": "false"
  },
  {
      "id": "7",
      "name": "Mahaveer Singh",
      "email": "mahaveer@mailinator.com",
      "role": "member",
      "checked": "false"
  },
  {
      "id": "8",
      "name": "Rahul Jain",
      "email": "rahul@mailinator.com",
      "role": "admin",
      "checked": "false"
  },
  {
      "id": "9",
      "name": "Rizan Khan",
      "email": "rizan@mailinator.com",
      "role": "member",
      "checked": "false"
  },
  {
      "id": "10",
      "name": "Sarah Potter",
      "email": "sarah@mailinator.com",
      "role": "admin",
      "checked": "false"
  }
];
const totalData = [
  {
      "id": "1",
      "name": "Aaron Miles",
      "email": "aaron@mailinator.com",
      "role": "member"
  },
  {
      "id": "2",
      "name": "Aishwarya Naik",
      "email": "aishwarya@mailinator.com",
      "role": "member"
  },
  {
      "id": "3",
      "name": "Arvind Kumar",
      "email": "arvind@mailinator.com",
      "role": "admin"
  },
  {
      "id": "4",
      "name": "Caterina Binotto",
      "email": "caterina@mailinator.com",
      "role": "member"
  },
  {
      "id": "5",
      "name": "Chetan Kumar",
      "email": "chetan@mailinator.com",
      "role": "member"
  },
  {
      "id": "6",
      "name": "Jim McClain",
      "email": "jim@mailinator.com",
      "role": "member"
  },
  {
      "id": "7",
      "name": "Mahaveer Singh",
      "email": "mahaveer@mailinator.com",
      "role": "member"
  },
  {
      "id": "8",
      "name": "Rahul Jain",
      "email": "rahul@mailinator.com",
      "role": "admin"
  },
  {
      "id": "9",
      "name": "Rizan Khan",
      "email": "rizan@mailinator.com",
      "role": "member"
  },
  {
      "id": "10",
      "name": "Sarah Potter",
      "email": "sarah@mailinator.com",
      "role": "admin"
  },
  {
      "id": "11",
      "name": "Keshav Muddaiah",
      "email": "keshav@mailinator.com",
      "role": "member"
  },
  {
      "id": "12",
      "name": "Nita Ramesh",
      "email": "nita@mailinator.com",
      "role": "member"
  },
  {
      "id": "13",
      "name": "Julia Hunstman",
      "email": "julia@mailinator.com",
      "role": "member"
  },
  {
      "id": "14",
      "name": "Juan Alonso",
      "email": "juan@mailinator.com",
      "role": "admin"
  },
  {
      "id": "15",
      "name": "Gabriel Montoya",
      "email": "gabriel@mailinator.com",
      "role": "admin"
  },
  {
      "id": "16",
      "name": "Beatrice Iglesias",
      "email": "beatrice@mailinator.com",
      "role": "admin"
  },
  {
      "id": "17",
      "name": "Sarah Symms",
      "email": "sarah.s@mailinator.com",
      "role": "admin"
  },
  {
      "id": "18",
      "name": "Patrick Pinheiro",
      "email": "patrick@mailinator.com",
      "role": "admin"
  },
  {
      "id": "19",
      "name": "Anand Patel",
      "email": "anand@mailinator.com",
      "role": "member"
  },
  {
      "id": "20",
      "name": "Kishore Kalburgi",
      "email": "kishore@mailinator.com",
      "role": "member"
  },
  {
      "id": "21",
      "name": "Rebecca Norris",
      "email": "rebecca@mailinator.com",
      "role": "member"
  },
  {
      "id": "22",
      "name": "Özgür Başak",
      "email": "ozgur@mailinator.com",
      "role": "member"
  },
  {
      "id": "23",
      "name": "Robin Andersen",
      "email": "robin@mailinator.com",
      "role": "member"
  },
  {
      "id": "24",
      "name": "Nandini Kumar",
      "email": "nandini@mailinator.com",
      "role": "member"
  },
  {
      "id": "25",
      "name": "Nikita Smith",
      "email": "nikita@mailinator.com",
      "role": "member"
  },
  {
      "id": "26",
      "name": "Colton Doe",
      "email": "colton@mailinator.com",
      "role": "member"
  },
  {
      "id": "27",
      "name": "Alain Senna",
      "email": "alain@mailinator.com",
      "role": "member"
  },
  {
      "id": "28",
      "name": "Ashwin Jain",
      "email": "ashwin@mailinator.com",
      "role": "member"
  },
  {
      "id": "29",
      "name": "Seema Bhatt",
      "email": "seema@mailinator.com",
      "role": "member"
  },
  {
      "id": "30",
      "name": "Kayla Scarpinski",
      "email": "kayla@mailinator.com",
      "role": "member"
  },
  {
      "id": "31",
      "name": "Ajay Ghosh",
      "email": "ajay@mailinator.com",
      "role": "member"
  },
  {
      "id": "32",
      "name": "Chris Lindberg",
      "email": "chris@mailinator.com",
      "role": "member"
  },
  {
      "id": "33",
      "name": "Christina Mourujärvi",
      "email": "christina@mailinator.com",
      "role": "member"
  },
  {
      "id": "34",
      "name": "Mikhail Bill",
      "email": "mikhail@mailinator.com",
      "role": "member"
  },
  {
      "id": "35",
      "name": "Eino Göregen",
      "email": "eino@mailinator.com",
      "role": "member"
  },
  {
      "id": "36",
      "name": "Zachariah Johansson",
      "email": "zacharaiah@mailinator.com",
      "role": "member"
  },
  {
      "id": "37",
      "name": "Aimaan Mohammed",
      "email": "aimaan@mailinator.com",
      "role": "admin"
  },
  {
      "id": "38",
      "name": "Aika Tsunoda",
      "email": "aika@mailinator.com",
      "role": "member"
  },
  {
      "id": "39",
      "name": "Kimiko Minamoto",
      "email": "kimiko@mailinator.com",
      "role": "member"
  },
  {
      "id": "40",
      "name": "Alyona Baginskaite",
      "email": "alyona@mailinator.com",
      "role": "member"
  },
  {
      "id": "41",
      "name": "Anirudh Mukherjee",
      "email": "anirudh@mailinator.com",
      "role": "member"
  },
  {
      "id": "42",
      "name": "Alyona Gov",
      "email": "alyonagov@mailinator.com",
      "role": "member"
  },
  {
      "id": "43",
      "name": "Robin Singh",
      "email": "robin@mailinator.com",
      "role": "member"
  },
  {
      "id": "44",
      "name": "Vijay Vasudevan",
      "email": "vijayv@mailinator.com",
      "role": "member"
  },
  {
      "id": "45",
      "name": "Steve Smith",
      "email": "steve@mailinator.com",
      "role": "member"
  },
  {
      "id": "46",
      "name": "Anirudh Banerjee",
      "email": "anirudhb@mailinator.com",
      "role": "member"
  }
];

test("delete all rows button", () => {
  const renderedDataTable = render(<DataTable 
    gridData = {gridData}
    totalData={totalData}
  />);
  const { getByTestId } = renderedDataTable;
  const deleteRow = getByTestId('delete-all-rows');
  
  expect(deleteRow.textContent).toBe("Delete Selected");
});

test("delete row button", () => {
  const renderedDataTable = render(<DataTable 
    gridData = {gridData}
    totalData={totalData}
  />);
  const { getByTestId } = renderedDataTable;
  const deleteRow = getByTestId('delete-row-1');

  expect(deleteRow.textContent).toBe("Delete");
  // fireEvent.click(deleteRow);
});

describe('DataTable Component', () => {
  const onGridDataChange = jest.fn();
  const filterCheckboxSelected = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DataTable gridData = {gridData}
        totalData={totalData} onChange={onGridDataChange} />)
  });
  it('renders', () => {
    expect(wrapper).not.toBeNull();
  });
  it("expects", () => {
    wrapper.find('.removeSelected').simulate('click');
  });
  it("expects grid data to be called none", () => {
    expect(onGridDataChange).toBeCalledTimes(0);
  });
  it('expects grid data to have length 10', () => {
    expect(gridData).toHaveLength(10);
  });
  it('expects totalData to have length 46', () => {
    expect(totalData).toHaveLength(46);
  });
  it('expected onGridDataChange to be called once',() => {
    wrapper.find('.removeSelected').simulate('click');
    expect(onGridDataChange).toBeCalledTimes(1);
  });
  it('expected first 10 checkbox to be true',() => {
    wrapper.find('.checkbox-1').simulate('click');
    wrapper.find('.checkbox-2').simulate('click');
    wrapper.find('.checkbox-3').simulate('click');
    wrapper.find('.checkbox-4').simulate('click');
    // expect(filterCheckboxSelected).toHaveLength(9);
    // expect(('.checkbox-1')).toBe(true);
  });
});

afterEach(cleanup);
  