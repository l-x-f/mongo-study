/* eslint-disable @typescript-eslint/ban-types */
import Koa from 'koa'
import RouterType from 'koa-router'

declare global {
  type App = Koa<Koa.DefaultState, Koa.DefaultContext>
  type Router = RouterType
  type CTX = Koa.ParameterizedContext<any, RouterType.IRouterParamContext<any, {}>, any>
}
