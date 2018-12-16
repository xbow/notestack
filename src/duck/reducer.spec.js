import uid from 'uid';
import reducer from './reducer'
import * as actions from './actions'

describe('reducer', () => {
  it('is true', () => {
    expect(true).toEqual(true)
  })

  it('can set isArchived to true', () => {
    const state = {
      notes: [
        { id: '4', body: 'foo' },
        { id: '11', body: 'archive this' }
      ]
    }
    const newState = reducer(state, {
      type: actions.archiveNote,
      payload: '11'
    })
    expect(newState).toEqual({
      notes: [
        { id: '4', body: 'foo' },
        { id: '11', body: 'archive this', isArchived: true }
      ]
    })
  })

  it('can add a note and new tags', () => {
    const state = { notes: [], tags: [] }
    const newState = reducer(state, {
      type: actions.saveNote,
      payload: {
        id: '5',
        body: '#This is a text note in **Markup**',
        tagIDs: ['6', '7'],
        newTags: [{ id: '8', name: 'TestTag' }],
      }
    })
    expect(newState).toEqual({
      notes: [{
        id: '5',
        body: '#This is a text note in **Markup**',
        tagIDs: ['6', '7', '8']
      }],
      tags: [{
        id: '8', name: 'TestTag'
      }]
    })
  }
  )
})