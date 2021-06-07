### Simple node App!

#### Description

This is a simple node application for academic purpose. It explores a few uses of express, routes, bodyParser to create a simple API.

#### Structure
```
app
├── src
│   ├── model (not used)
│   ├── controllers
│   ├── jobs
│   ├── routes
│   ├── services
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

You can call them passing the request body as a json as the example bellow:
```GET http://localhost:3333/calculo4/```

<details><summary>Example</summary>
<p>

```json
{
	"numero": 2,
	"numero2": 1,
	"numero1": 1,
	"numeroos": [1, 2, 3,4 ,5],
	"casas": [
		{
			"numero": 1,
			"rua": "teste 1"
		},
		{
			"numero": 2,
			"rua": "teste 2"
		},
		{
			"numero": 3,
			"rua": "teste 3"
		}
	]
}
```

</p>
</details>
