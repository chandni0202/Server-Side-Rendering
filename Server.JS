import express from 'express';
import React from 'react';
import fs from 'fs';
import {renderToString} from 'react-dom/server';
import App from './App.js';

const app = express();

app.use(express.static('/public'))

const robots = JSON.parse(fs.readFileSync('/public/robots.json','utf-8'))

const RoboFamily = React.createElement(App);

app.get('/',(req,resp)=>{
    resp.render('index',{

    content : renderToString(RoboFamily({data : robots}))

    })
})