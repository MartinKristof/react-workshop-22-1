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
import UncontrolledForm from './UncontrolledForm';

export const Components = () => (
  <section>
    <Heading title="Title">
      <p>Playground</p>
    </Heading>
    <Click />
    <Input />
    <LifeCycles />
    <RefComponent />
    <UncontrolledForm />
    <List numbers={[1, 3, 5]} type="a" />
    <List numbers={[1, 3, 5]} type="b" />
    <ContextApply />
    <Counter />
    <Effects />
    <CounterWithDispatcher />
    <LiftStateUp title="Title" />
  </section>
);
