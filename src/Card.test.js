import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


test("smoke test - renders without crashing", ()=>{

    render(<Card />)
  })


test('card should match snapshot', ()=>{

    const { asFragment } = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
  })