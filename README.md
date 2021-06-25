### Simple node App!

#### Description

This is a simple node application for academic purpose. It explores a few uses of express, routes, bodyParser to create a simple API.

#### Structure
```
app
├── src
|   ├── api
│   |	├── model
|	|	|	├── wrappers
│   |	├── controllers
│   |	├── services
│   ├── jobs
│   ├── routes
│   ├── middleware
│   |	├── validators

```
------

#### Running

#### Build 

`run 'yarn'`

#### Run

`run 'yarn dev'`

------
#### Example
The applicaton will run at http://localhost:3333

There are four methods to be called **'/calculo1'**, **'/calculo2'**, **'/calculo3'**, **'/calculo4'**

There is a simple method called **'/calculadora'**

You can call them passing the request body as a json as the example bellow:
```GET http://localhost:3333/calculadora/```

<details><summary>Example</summary>
<p>

```json
{
	"numero1": 1,
	"numero2": 1,
	"operacao": "+"
}
```

**numero1** is a required attribute
**numero2** is a required attribute and need to be greater than zero
**operacao** is a required attribute

</p>
</details>
