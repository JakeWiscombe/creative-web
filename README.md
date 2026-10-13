# Creative Web App - Project Concept

My project concept must outline the following points:
- [x] your proposed web app concept and unique features
- [ ] examples of existing alternatives and inspirations
- [ ] evidence of exploration and consideration of a range of ideas and approaches around this concept.
- [ ] how it will use data.
- [ ] how it might present a novel user experience.
- [ ] identify the audience and how the web app aligns to their needs

# JX Modifications - Customer & Development Hub
A secure web application designed to improve how custom development orders are managed between developers and customers at JX Modifications.

The main purpose of the platform is to provide developers with a central location to create, manage and track custom orders, while giving customers a secure portal where they can monitor their orders and access completed files through their Discord account. This builds directly on the original concept of replacing the current spreadsheet-based order workflow with a more structured system.

This application **will not** replace the existing [JX Modifications store](https://jxmodifications.co.uk). Payhip will continue to operate as the main storefront for publicly available products. This will instead focus specifically on custom orders and use selected external services where they support that workflow.

Stripe and PayPal will be used to automatically generate payment links for custom orders, allowing customers to choose their preferred payment method. The Payhip API will support smaller utilities, such as creating discount coupons for products.

This platform could later be expanded on containing areas such as a knowledge base for resources, careers and additional customer service, and much more! These will be treated as **future developments** rather than part of the core scope of this project.

## Purpose
The purpose of the **JX Customer & Development Hub** is to provide developers and customers with a secure and organised portal for managing custom orders, without relying on several disconnected systems.

At present, information relating to custom orders may be spread across platforms such as Discord, Google Sheets and external file-hosting services. This can make orders more difficult to manage and increases the possibility of important information or completed files becoming difficult to access.

My aim to bbring the most important part of the custom-order process into one central application:

* Each developer will have their own account, allowing them to create and manage custom orders, and access tools relevant to their work.
* Customers will be able to securely login using Discord to view orders associated with their Discord account and access completed files directly through the website.

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

Each custom order will be linked to a specific developera ccount, allowing the system to clearly identify who is responsible for the work.

> **Users with management permissions may also have the ability to reassign an order to another developer where necessary.**



### Developer Dashboard
The developer dashboard will act as the main working area for each developer on the team. Rather than every developer viewing every cstuom order across **JX Modifications**, they will only see the orders associated with their account.

**The dashboard could provide information such as:**
* Active custom orders they have created.
* Orders that are awaiting payment.
* Orders that are currently in development.
* Orders awaiting a customer review.
* Completed orders.
* Recent order activity.

This will give each developer a quick overview of their current workload and make it easier to identify orders that require attention.



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



### Payment Links - Using Stripe and PayPal API
When a custom order is created, **JX Customer & Development Hub** will automatically generate both a Stripe and PayPal payment link using the information provided for that order.

The customer will then be able to view both payment options directly from their order page and choose whichever method they prefer.

This removes the need for developers to manually create payment requests through separate payment dashboards and ensures that customers are always given a choice between the two supported payment methods.



### Payhip Coupon Creation
The **JX Customer & Development Hub** will integrate selected functionality from the **Payhip API**.

Payhip will remain the main JX Modifications storefront and will continue to handle normal product sales and management. This web application **will not** allow developers to manage their publicly available products.

Instead, authorised developers may be able to generate discount coupons for their own products when required.



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
* Resassign orders, only if necessary
* Manage users and permissions
* Assist with customer or developer issues

> More advanced management functionality would be considered for future development.
