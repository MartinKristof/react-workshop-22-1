import React from 'react';
import Click from './Click';
import ContextApply from './ContextApply';
import { Effects } from './EffectHook';
import Heading from './Heading';
import Input from './Input';
import LifeCycles from './LifeCycles';
import LiftStateUp from './LiftStateUp';
import List from './List';
import { CounterWithDispatcher } from './ReducerHook';
import RefComponent from './RefComponent';
import { Counter } from './StateHook';
import Fetch from './toRefactor/Fetch';
import FetchClass from './toRefactor/FetchClass';
import ReactQuery from './toRefactor/ReactQuery';
import State from './toRefactor/State';
import StateClass from './toRefactor/StateClass';
import TextInput from './toRefactor/TextInput';
import UncontrolledForm from './UncontrolledForm';

export const Components = () => (
  <section>
    {/* <Heading>
      <p>Playground</p>
    </Heading> */}
    {/* <Click /> */}
    {/* <Input /> */}
    {/* <LifeCycles /> */}
    {/* <RefComponent /> */}
    {/* <UncontrolledForm /> */}
    {/* <List numbers={[1, 3, 5]} type="a" /> */}
    {/* <List numbers={[1, 3, 5]} type="a" /> */}
    {/* <ContextApply /> */}
    {/* <Counter /> */}
    {/* <Effects /> */}
    {/* <CounterWithDispatcher /> */}
    {/* <LiftStateUp title="Title" /> */}
    {/* <State /> */}
    {/* <TextInput /> */}
    {/* <Fetch /> */}
    <ReactQuery />
  </section>
);
