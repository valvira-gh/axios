// GitHub Copilot: Toki, tässä on joitakin esimerkkejä siitä, miten JSDoc-tageja voidaan käyttää TypeScriptin ja Reactin kanssa:

// 1. **Komponentin kuvaus ja propertien dokumentointi**


/**
 * Tervehdyskomponentti, joka näyttää tervehdyksen käyttäjälle.
 *
 * @param {Object} props - Komponentin propsit
 * @param {string} props.name - Käyttäjän/fix e/**
 * Tervehdyskomponentti, joka näyttää tervehdyksen käyttäjälle.
 *
 * @param {Object} props - Komponentin propsit
 * @param {string} props.name - Käyttäjän/fix e nimi
 * @returns {JSX.Element} Renderöity komponentti
 */
import React from "react";
const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return <><h1>Hello, {name}!</h1></>;
};

// Tässä esimerkissä `@param`-tagia käytetään kuvailemaan komponentin propsit ja `@returns`-tagia käytetään kuvailemaan, mitä komponentti renderöi.
/******************************************** */ nimi
 * @returns {JSX.Element} Renderöity komponentti
 */
import React from "react";
import React, { Fragment } from "react";
const Greeting: React.FC<{ name: string }> = ({ name }) => {
return <><h1>Hello, {name}!</h1></>;

// Tässä esimerkissä `@param`-tagia käytetään kuvailemaan komponentin propsit ja `@returns`-tagia käytetään kuvailemaan, mitä komponentti renderöi.
/******************************************** */

// 2. ** Luokkakomponentin metodien dokumentointi **
/**
 * Counter-komponentti, joka näyttää laskurin ja painikkeen laskurin arvon kasvattamiseksi.
 */
class Counter extends React.Component<{}, { count: number }> {
  state = {
    count: 0,
  };

  /**
   * Kasvattaa laskurin arvoa yhdellä.
   */
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <button onclick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


/**
 * In this example, "@method" tag is used to describe a method of a class component.
 *
 * These examples give an idea of how JSDoc tags can be used with TypeScript and React. Note that TypeScript typing provides a lot of information about the code structure, but JSDoc comments can provide additional information that may not be evident from TypeScript typing.
 */

