// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import styles from './FileLoader.scss';

export default class FileLoader extends Component {

  generateSidebar() {
    return (
      <div className={styles['sidebar']}>

      </div>
    );
  }

  generateFileSelection() {
    return (
      <div className={styles['main']}>
        <Table basic="very" celled={true} inverted={true} selectable={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>File</Table.HeaderCell>
              <Table.HeaderCell>Characters</Table.HeaderCell>
              <Table.HeaderCell>Stage</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>Game_20170422T101548</Table.Cell>
              <Table.Cell>Falco / Fox</Table.Cell>
              <Table.Cell>Final Destination</Table.Cell>
              <Table.Cell>2:13</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div className={styles['layout']}>
        {this.generateSidebar()}
        {this.generateFileSelection()}
      </div>
    );
  }
}
