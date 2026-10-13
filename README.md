# Creative Web App - Project Concept

My project concept must outline the following points:
- [x] Your proposed web app concept and unique features.
- [x] Examples of existing alternatives and inspirations.
- [x] Evidence of exploration and consideration of a range of ideas and approaches around this concept.
- [x] How it will use data.
- [x] How it might present a novel user experience.
- [x] Identify the audience and how the web app aligns to their needs.

# JX Modifications - Customer & Development Hub
A secure web application designed to improve how custom development orders are managed between developers and customers at JX Modifications.

The main purpose of the platform is to provide developers with a central location to create, manage and track custom orders, while giving customers a secure portal where they can monitor their orders and access completed files through their Discord account. This builds directly on the original concept of replacing the current spreadsheet-based order workflow with a more structured system.

This application **will not** replace the existing [JX Modifications store](https://jxmodifications.co.uk). Payhip will continue to operate as the main storefront for publicly available products. This will instead focus specifically on custom orders and use selected external services where they support that workflow.

Stripe and PayPal will be used to automatically generate payment links for custom orders, allowing customers to choose their preferred payment method. The Payhip API will support smaller utilities, such as creating discount coupons for products.

This platform could later be expanded on containing areas such as a knowledge base for resources, careers and additional customer service, and much more! These will be treated as **future developments** rather than part of the core scope of this project.

<br>

## Purpose
The purpose of the **JX Customer & Development Hub** is to provide developers and customers with a secure and organised portal for managing custom orders, without relying on several disconnected systems.

At present, information relating to custom orders may be spread across platforms such as Discord, Google Sheets and external file-hosting services. This can make orders more difficult to manage and increases the possibility of important information or completed files becoming difficult to access.

My aim to bring the most important part of the custom-order process into one central application:

* Each developer will have their own account, allowing them to create and manage custom orders, and access tools relevant to their work.
* Customers will be able to securely login using Discord to view orders associated with their Discord account and access completed files directly through the website.

<br>

## Core Features

### Developer Accounts
Each developer will have their own individual account within the **JX Customer & Development Hub**.

Once logged in, developers will be taken to a personalised dashboard containing the custom orders linked to their account.

**Developers will be able to:**
* View active and completed custom orders.
* Create and manage new custom orders.
* Update the status of assigned orders.
* Upload completed files for customers.
* Generate payment links for assigned orders.
* Create Payhip coupons where permitted with restrictions.
* View relevant customer and order information.

Each custom order will be linked to a specific developer account, allowing the system to clearly identify who is responsible for the work.

> **Users with management permissions may also have the ability to reassign an order to another developer where necessary.**

<br>

### Developer Dashboard
The developer dashboard will act as the main working area for each developer on the team. Rather than every developer viewing every custom order across **JX Modifications**, they will only see the orders associated with their account.

**The dashboard could provide information such as:**
* Active custom orders they have created.
* Orders that are awaiting payment.
* Orders that are currently in development.
* Orders awaiting a customer review.
* Completed orders.
* Recent order activity.

This will give each developer a quick overview of their current workload and make it easier to identify orders that require attention.

<br>

### Developer Custom Order Tracking
Developers will be able to create, manage and track custom orders through their own dashboard, rather than relying on a large shared Google Sheet.

When creating a new order, the developer will complete a form containing relevant information such as the following:

* Customer's Discord ID
* Original Ticket Number/Channel ID
* Total Price

Developers will then be able to view their current and previous orders and update individual projects as development progresses.

**Possible order stages could include:**
1. Awaiting Payment
2. In Development / Work in Progress
3. Testing
4. Customer Review
5. Completed

This will provide developers with a clearer overview of their workload while also giving customers greater visibility over the progress of their order.

<br>

### Customer Portal and Downloads
Customers will have access to the **JX Customer & Development Hub** through **Discord OAuth**.

Instead of creating a separate username and password, customers will sign in using their Discord account they already used within the Discord community. Their Discord ID will then be used to identify which custom orders belong to them.

Once logged in, customers will be able to view:

* Active custom orders
* Current progress of their order
* The assigned developer working on their order
* Basic order information
* Previous custom orders
* Available downloads

Completed custom-order files will remain linked to the customer's account, providing a more permanent way of accessing purchased work than relying on Discord attachments or temporary download links.

> **This will only apply to custom orders**. Normal products purchased through the main JX Modifications store will continue to be accessed through Payhip.

<br>

### Payment Links - Using Stripe and PayPal API
When a custom order is created, **JX Customer & Development Hub** will automatically generate both a Stripe and PayPal payment link using the information provided for that order.

The customer will then be able to view both payment options directly from their order page and choose whichever method they prefer.

This removes the need for developers to manually create payment requests through separate payment dashboards and ensures that customers are always given a choice between the two supported payment methods.

<br>

### Payhip Coupon Creation
The **JX Customer & Development Hub** will integrate selected functionality from the **Payhip API**.

Payhip will remain the main JX Modifications storefront and will continue to handle normal product sales and management. This web application **will not** allow developers to manage their publicly available products.

Instead, authorised developers may be able to generate discount coupons for their own products when required.

<br>

### Account Types & Permissions
The **JX Customer & Development Hub** will use role-based permissions so that different users have access to different areas of the system.

#### Customers
Customers will only be able to view custom order connected directly to their Discord account. They will be able to:

* View their custom orders
* Check progress of an order
* View assigned developers
* Access and download completed files

#### Developers
Developers will have their own account and personalised dashboard. They will be able to:

* Create and manage custom orders
* Update progress of an order
* Upload completed files
* Access approved developer utilities

#### Management / Administrators
Management accounts will have wider access to the platform. They may be able to:

* View all custom orders across the platform
* View all developer workloads
* Reassign orders, only if necessary
* Manage users and permissions
* Assist with customer or developer issues

> More advanced management functionality would be considered for future development.

<br>

## Existing Alternatives & Inspirations
There are several existing systems and platforms that have influenced the concept behind the JX Customer & Development Hub.

#### Google Sheets
Custom orders are currently managed using a shared Google Sheet. This works for storing basic information but becomes more difficult to manage as the number of developers and orders increases.

A spreadsheet also does not provide individual developer dashboards, customer accounts, secure file downloads or automatic payment links.

The existing spreadsheet system has therefore inspired the structured order-management side of the application, while the web application aims to improve how that information is presented and accessed.

#### Discord
Discord is currently the main communication platform between developers and customers.

While Discord is useful for communication, important information can become difficult to locate once conversations become longer or tickets are closed.

The application will therefore work alongside Discord rather than replacing it. Discord will continue to handle communication, while the web application will provide a permanent location for custom-order information, progress and files.

#### Payhip
Payhip is already used as the main storefront for JX Modifications.

Rather than attempting to replace Payhip, the application will only use selected API functionality where it can improve the developer workflow, such as creating discount coupons.

#### Stripe and PayPal
Stripe and PayPal are already established payment platforms and will be used for handling payments rather than developing a separate payment system.

Their APIs will allow payment links to be generated automatically when a custom order is created.

<br>

## Exploration & Consideration of Different Approaches
Before deciding to develop a dedicated web application, I considered several different ways of improving the existing custom-order workflow.

#### Expanding the Existing Google Sheet
One option would be to continue developing the existing spreadsheet by introducing more columns, filters and organisation.

This would be quicker to implement, but customers would still have no direct access to their orders and developers would continue sharing one large system which isn't efficient.

#### Developing More Discord Bot Features
Another option would be to move more of the custom-order workflow into the existing Discord environment.

This would make the system convenient because developers and customers already use Discord. However, Discord is primarily designed for communication and would make it more difficult to provide permanent downloads, detailed dashboards and structured order information.

#### Using Existing Project Management Software
Existing project-management platforms could also be used to organise development work.

However, these systems would not be designed around the specific workflow required for JX Modifications, particularly Discord authentication, customer downloads and automatic Stripe/PayPal payment generation.

#### Creating a Dedicated Web Application
I decided that a dedicated web application would provide the greatest amount of control over both the developer and customer experience.

It allows the system to be designed specifically around the existing custom-order process while still integrating services that are already being used, such as Discord, Payhip, Stripe and PayPal.

<br>

## Use of Data
Data will be an important part of the application because it will be used to connect developers, customers and custom orders. Information stored by the application may include:

* Developer account information and permissions set by management
* Customer Discord IDs and basic profile information
* Internal Order IDs (generated by the web application)
* Assigned developers
* Customer IDs
* Original Discord ticket/channel IDs
* Order prices
* Order statuses
* Payment information, not saving customer information but payment links.
* Creation and completion dates
* Uploaded custom order files

A customer's **Discord ID** will simply act as one of th emain links between their Discord account and their custom orders.

When a customer signs into the website using **Discord OAuth**, the system will identify their Discord ID and use it to retrieve orders associated with that account.

Developer accounts will work in a similar way. Each order will contain information identifying the developer responsible for it, allowing developers to see only the orders relevant to their account.

Management accounts will have broader permissions, allowing authorised users to access information across multiple developers where necessary.

The data will therefore not simply be stored; it will be used to dynamically determine what information and functionality each user sees.

<br>

## Novel User Experience
One of the main aims of this web application is to provide a more interactive experience than the current spreadsheet and Discord-based workflow currently provides.

A developer will receive a detailed dashboard focused on workload and order management, while a customer will receive a simpler interface focused on the progress of their own custom orders.

Customers could see the progress of an order through the stages such as:

1. Awaiting Payment
2. In Development
3. Testing
4. Customer Review
5. Completed

When an order requires payment, the system will automatically provide both Stripe and PayPal payment options directly from the customer's order page. Once paid, this will be updated and the developer will be notified that the customer has paid for their order and work can begin.

Completed work will also remain available through the customer's account, meaning customers will not need to search through old Discord conversations or temporary file links to find their custom products.

Combining individual developer dashboards, Discord-based customer authentication, automatic payment options and permanent order downloads within one custom-order workflow will provide a more tailored experience than the systems currently being used independently.

<br>

## Target Audience & User Requirements
The primary audiences for this application are **developers and customers**, with management having additional administrative access to manage permissions and oversee all operations from the dashboard.

#### Developers
All developers need an organised way of managing their own custom order workload, without searching through a large shared spreadsheet - it isn't efficient and lacks organisation.

This application addresses this by providing each developer with an individual account, personalised dashboard and tools for creating, managing, tracking and completing custom orders.

#### Customers
Customers need a simple way to monitor custom orders and retain access to completed work.

Discord authentication will reduce the need to create another account, while their dashboard will only display orders associated with their Discord ID.

They will also be able to see order progress, payment options and completed downloads from one location.

#### Management
Management users need greater visibility over the custom-order process so that they can assist developers and customers when required.

Management permissions may therefore provide access to all orders, developer workloads, account permissions and order reassignment.












