import fs from 'fs';
import { scenarios } from './scenariusze';
import { Usecase, FlowItem } from './usecase.js';

function generateTable(usecase: Usecase) {
    // Destructure the scenario object for easy access to properties
    const {
        author,
        usecase: usecaseName,
        language,
        preconditions,
        postconditions,
        actors,
        mainFlow,
        alternateFlow,
    } = usecase;

    const subject = 'System zarządzania siłownią';

    // Helper function to generate a list of items in <ul> format
    function generateList(items: Array<string>) {
        return items.map((item) => `<li>${item}</li>`).join('');
    }

    // Helper function to generate an ordered list for the main flow
    function generateOrderedList(items: Array<FlowItem>) {
        return items.map((item) => `<li>${item.text}</li>`).join('');
    }

    // Generate the HTML content for the table
    return `
        <table border="1">
            <tbody>
                <tr>
                    <th>Author name:</th>
                    <td style="width: 15cm;">${author?.name}</td>
                </tr>
                <tr>
                    <th>Author surname:</th>
                    <td style="width: 15cm;">${author?.surname}</td>
                </tr>
                <tr>
                    <th>Author group:</th>
                    <td style="width: 15cm;">${author?.group}</td>
                </tr>
                <tr>
                    <th>Subject:</th>
                    <td style="width: 15cm;">${subject}</td>
                </tr>
                <tr>
                    <th>Use Case:</th>
                    <td style="width: 15cm;">${usecaseName}</td>
                </tr>
                <tr>
                    <th>Language:</th>
                    <td style="width: 15cm;">${language}</td>
                </tr>
                <tr>
                    <th>Preconditions:</th>
                    <td style="width: 15cm;">
                        <ul>
                            ${generateList(preconditions)}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Postconditions:</th>
                    <td style="width: 15cm;">
                        <ul>
                            ${generateList(postconditions)}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Actors:</th>
                    <td style="width: 15cm;">
                        <ul>
                            ${generateList(actors)}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Main flow:</th>
                    <td style="width: 15cm;">
                        <ol>
                            ${generateOrderedList(mainFlow)}
                        </ol>
                    </td>
                </tr>
                <tr>
                    <th>Alternate flow:</th>
                    <td style="width: 15cm;">
                        <ul>
                            ${
                                alternateFlow
                                    ? alternateFlow
                                          .map(
                                              (flow) => `
                                <li>
                                    <span class="number">${flow.num}</span>
                                    <span class="condition">${flow.text}</span>
                                </li>
                            `
                                          )
                                          .join('')
                                    : ''
                            }
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

let result: string = '';
for (const e of scenarios) {
    result += generateTable(e) + '\n';
}

fs.mkdirSync('out');
fs.writeFileSync('out/tabelki.html', result);
