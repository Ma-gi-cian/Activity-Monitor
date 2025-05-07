**Electron Application Development**

Electron application run on a two process structure, ``main`` and ``renderer``. 

- ``main`` process has the access to the **Node.js** APIs but not the rendering that is going on. Assume it as the backend of any website. It will handle the tasks like **talking to a database**, **saving files**, **login**, etc.

- ``renderer`` process has the access to the **DOM** and is responsible for the rendering stuff. Its like the frontend of the website, but is not a website but a desktop application.


Inside a typical Electron codebase other than these two things being handled we also have something called a **preload script** or maybe a **preload handler**.

This is the third important components other than ``main`` and ``renderer``. The ``preload script`` is responsible for the communication between the **main** and **renderer**. It has limited access to the Node.js APIs